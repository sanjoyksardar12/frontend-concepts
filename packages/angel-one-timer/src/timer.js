import { useCallback, useEffect, useMemo, useState } from "react";

function TimerForm({ updateTime }) {
  const [time, setTime] = useState(0);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(time);
      updateTime(time);
    },
    [time, updateTime]
  );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={time}
          onChange={(event) => setTime(+event.target.value)}
        />
        <button onClick={handleSubmit}>Apply</button>
      </form>
    </>
  );
}

function Clock({ time }) {
  console.log("time", time);
  // const [minutes, seconds] = useMemo(()=>{

  // }, [time])
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      Time :
      {minutes && (
        <>
          <span>{minutes}</span>
          <span>m::</span>
        </>
      )}
      {seconds ? (
        <>
          <span>{seconds}</span>
          <span>s</span>
        </>
      ) : null}
    </>
  );
}
function useSetInterval(func, delay) {
  useEffect(() => {
    if (!delay) {
      return;
    }
    const interval = setInterval(() => {
      func();
    }, delay);

    return () => clearInterval(interval);
  }, [delay, func]);
}

function Timer() {
  const [time, setTime] = useState(0);

  useSetInterval(
    () => {
      setTime((time) => time - 1);
    },
    time > 0 ? 1000 : undefined
  );

  const updateTime = useCallback(function (time) {
    setTime(time);
  }, []);
  return (
    <div>
      <TimerForm updateTime={updateTime} />
      {time ? <Clock time={time} /> : null}
    </div>
  );
}

export default Timer;
