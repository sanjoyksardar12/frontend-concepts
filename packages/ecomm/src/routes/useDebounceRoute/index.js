import { useState, useCallback, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

const UseDebounceRoute = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 300);

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value)
  }, []);


  useEffect(() => {
    //here you can call any api
  }, [debouncedValue])

  return (
    <div className='router-body'>
      <h3 className='padding-y-20'>use Debounce hook</h3>
      <p className='padding-y-20'>Input value: {inputValue}</p>
      <p className='padding-y-20'>Debounced value: {debouncedValue} </p>
      <input value={inputValue} onChange={handleInputChange} />
    </div>
  )
}

export default UseDebounceRoute;