import { useCallback, useState, useLayoutEffect } from "react";
import useISOMorphicLayoutEffect from "./useISOMorphicLayoutEffect";
import useEventListener from "./useEventListener";

const useElementSize = () => {
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({ height: 0, width: 0 })

  const handleSize = useCallback(() => {
    debugger
    console.log("handleSize")
    setSize({
      height: ref?.offsetHeight || 0,
      width: ref?.offsetWidth || 0
    })
  })

  useEventListener("resize", handleSize);

  useLayoutEffect(() => {
    console.log("useISOMorphicLayoutEffect------------------");
    handleSize();
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  console.log("ref?.offsetHeight", ref?.offsetHeight, ref?.offsetWidth)
  console.log("ref", ref);

  return [setRef, size, ref];
}

export default useElementSize;  