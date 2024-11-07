import { useHistoryContext } from "@/state/history";

const useHistory = () => {
  const { history, push, clear } = useHistoryContext();

  return { history, push, clear };
};

export default useHistory;
