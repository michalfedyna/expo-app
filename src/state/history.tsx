import {
  Color,
  ColorEntry,
  ColorHistory,
  ComponentWithChildren,
} from "@/Types";
import { createContext, useCallback, useContext, useReducer } from "react";

type History = {
  history: ColorHistory;
  push?: (color: Color) => void;
  clear?: () => void;
};

const HistoryContext = createContext<History>({
  history: [],
});

const historyReducer = (
  state: ColorHistory,
  action: { type: "push"; entry: ColorEntry } | { type: "clear" },
) => {
  switch (action.type) {
    case "push":
      const newHistory = [...state];
      newHistory.push(action.entry);
      return newHistory;
    case "clear":
      return [];
  }
};

export const HistoryProvider: ComponentWithChildren = ({ children }) => {
  const [history, dispatch] = useReducer(historyReducer, []);

  const push = useCallback(
    (color: Color) => {
      dispatch({ type: "push", entry: { color, timestamp: Date.now() } });
    },
    [dispatch],
  );

  const clear = useCallback(() => {
    dispatch({ type: "clear" });
  }, [dispatch]);

  return (
    <HistoryContext.Provider value={{ history, push, clear }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => useContext(HistoryContext);
