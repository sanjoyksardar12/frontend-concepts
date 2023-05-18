import { useState, useEffect } from "react";

const useDebounce = (value, delay = 100) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    console.log("timer: ", timer)

    // on value or delay changes, first it will execute the unmounted function ie actually it will clear the timer
    // this point of time , timer reference will be preserved
    // then it will execute the useEffect body
    return () => {
      console.log("executing clear timeout......", timer);
      clearTimeout(timer);
    }
  }, [value, delay])

  return [debouncedValue]
}

export default useDebounce;