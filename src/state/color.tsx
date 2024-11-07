import { Color, ComponentWithChildren } from "@/Types";
import { createContext, useContext, useState } from "react";

const initialBackgroundColor = "#fff";

const ColorContext = createContext<{
  backgroundColor: Color;
  setBackgroundColor?: (color: Color) => void;
}>({
  backgroundColor: initialBackgroundColor,
});

export const ColorProvider: ComponentWithChildren = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState<Color>(
    initialBackgroundColor,
  );

  return (
    <ColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
