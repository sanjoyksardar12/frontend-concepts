import { useState} from 'react';
import useInterval from "../../hooks/useInterval"

const UseIntervalRoute = ()=>{
  const [ count, setCount] = useState(0)
  const [ delay, setDelay ] = useState(1000);
  const [isPlaying, setPlaying] = useState(false);

  
  const handleChange = (e) => {
    setDelay(e.target.value)
  }

  useInterval(() => {
    setCount(count + 1)
  }, isPlaying? delay: null)


  return(
    <div className='router-body'>
			<h1 className='padding-y-20'>use SetTimeout hook</h1>

      <h3>Count : {count}</h3>
      <button onClick={()=>setPlaying(!isPlaying)} >{isPlaying?"Pause": "Play"}</button>
      <p>
      <label htmlFor='delay'>Delay: </label>
      <input type='number' id='delay' value={delay} onChange={handleChange} />
    </p>

    <p>
      {useInterval.toString()}
    </p>
		</div>
  )
}

export default UseIntervalRoute;