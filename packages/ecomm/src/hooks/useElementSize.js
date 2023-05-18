import { useCallback, useState, useLayoutEffect } from "react";
import useISOMorphicLayoutEffect from "./useISOMorphicLayoutEffect";
import useEventListener from "./useEventListener";

const useElementSize = () => {
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({ height: 0, width: 0 })

  const handleSize = useCallback(() => {
    setSize({
      height: ref?.offsetHeight || 0,
      width: ref?.offsetWidth || 0
    })
  },[ref?.offsetHeight, ref?.offsetWidth])

  useEventListener("resize", handleSize);

  useLayoutEffect(() => {
    handleSize();
  }, [handleSize, ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, ref, size, ];
}

export default useElementSize;  