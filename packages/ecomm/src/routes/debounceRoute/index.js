import { useState, useCallback, useEffect } from 'react';
import debounce from '../../javascript-concepts/debounce';

const DebounceRoute = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebounceValue] = useState("")

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandler = useCallback(debounce(setDebounceValue, 300), [])

  useEffect(() => {
    debounceHandler(inputValue)
  }, [debounceHandler, inputValue])

  useEffect(() => {
    //here you can call any api
  }, [debouncedValue])

  return (
    <div className='router-body'>
      <h1 className='padding-y-20'> Debounce function</h1>
      <p className='padding-y-20'>Input value: {inputValue}</p>
      <p className='padding-y-20'>Debounced value: {debouncedValue} </p>
      <input value={inputValue} onChange={handleInputChange} />
    </div>
  )
}

export default DebounceRoute;