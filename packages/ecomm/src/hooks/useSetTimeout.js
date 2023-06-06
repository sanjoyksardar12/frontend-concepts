import { useEffect } from 'react';

const UseSetTimeout = (callback, delay = 5000) => {
  useEffect(() => {
    let timer = setTimeout(() => callback(), delay)
    return () => {
      clearTimeout(timer)
    }
  }, [callback, delay]);
}

export default UseSetTimeout;