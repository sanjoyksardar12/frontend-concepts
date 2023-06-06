import { useState, useCallback, useEffect } from 'react';
import throttle from '../javascript-concepts/throttle';

const ThrottleRoute = () => {
  const [inputValue, setInputValue] = useState([]);
  const [throttleValue, setThrottleValue] = useState([])

  const handleMouseMove = useCallback((event) => {
    setInputValue([event.clientX, event.clientY]);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleHandler = useCallback(throttle(setThrottleValue, 300), [])

  useEffect(() => {
    throttleHandler(inputValue)
  }, [throttleHandler, inputValue]);

  useEffect(() => {
    //here you can call any api
  }, [throttleValue])

  return (
    <div className='router-body'>
      <h1 className='padding-y-20'> Throttle Function</h1>
      <p className='padding-y-20'>Current value: {inputValue.toString()}</p>
      <p className='padding-y-20'>Throttle value: {throttleValue.toString()} </p>
      <div style={{ width: "200px", height: "200px", background: "grey" }} onMouseMove={handleMouseMove}>
        Move Mouse Here
      </div>
    </div>
  )
}

export default ThrottleRoute;