import { useColorContext } from "@/state/color";
import { useCallback } from "react";
import useHistory from "./history";

const randomizeValue = () => Math.floor(Math.random() * 256);

const useColor = () => {
  const { push } = useHistory();
  const { backgroundColor, setBackgroundColor } = useColorContext();

  const randomizeColor = useCallback(() => {
    const color = `rgb(${randomizeValue()},${randomizeValue()},${randomizeValue()})`;
    if (setBackgroundColor) setBackgroundColor(color);
    if (push) push(color);
  }, [setBackgroundColor, push]);

  return { backgroundColor, randomizeColor };
};

export default useColor;
