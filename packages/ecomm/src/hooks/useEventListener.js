import { useRef, useEffect } from "react";
import useISOMorphicLayoutEffect from "./useISOMorphicLayoutEffect";

function useEventListener(eventName, handler = () => { }, targetRef) {
  const savedHandler = useRef(handler);

  useISOMorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = targetRef?.current || window;
    if (!(targetRef && targetRef.current)) {
      return;
    }

    const eventListener = (event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener);


    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, targetRef])
}

export default useEventListener;