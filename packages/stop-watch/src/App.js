import { useEffect, useRef, useState } from "react";
import "./index.css";

/*
Create StopWatch
Features
    show time HH:MM:SS
    Start => Watch will start  and ( Pause, Reset) will be visible 
    Reset => Watch will stop and reset to 00:00:00 with the Start button visible 
    Pause => Watch will be paused and (Resume, Reset) will be visible 
    Resume =>  Watch will start from the position it was paused and (Pause, Reset) will be visible 

*/

const Status = {
  stop: 0,
  start: 1,
  reset: 2,
  pause: 3,
  resume: 4
};

const useInterval = (fn, delay) => {
  const callbackRef = useRef(fn);
  useEffect(() => {
    callbackRef.current = fn;
  });

  useEffect(() => {
    if (!delay) {
      return;
    }
    const timer = setInterval(() => {
      callbackRef.current();
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [fn, delay]);
};

function Clock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [running, setRunning] = useState(Status.stop);

  useEffect(() => {
    if (seconds === 59) {
      setMinutes((minutes) => minutes + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 59) {
      setHours((hours) => hours + 1);
    }
  }, [minutes]);

  const callback = () => {
    setSeconds((seconds) => {
      if (seconds === 59) {
        return 0;
      }
      return seconds + 1;
    });
  };

  useInterval(callback, running === Status.start ? 1000 : null);

  const format = (value) => {
    if (value.toString().length === 1) {
      return "0" + value;
    }
    return value;
  };

  const resetValue = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setRunning(Status.stop);
  };

  return (
    <>
      <div style={{ background: "grey", display: "flex" }}>
        <div style={{}}>
          <p className="header">Hours</p>
          <p className="time">{format(hours)}</p>
        </div>
        <div style={{}}>
          <p className="header">Minutes</p>
          <p className="time">{format(minutes)}</p>
        </div>
        <div style={{}}>
          <p className="header">Seconds</p>
          <p className="time">{format(seconds)}</p>
        </div>
      </div>

      <div style={{}}>
        {running === Status.stop && (
          <button onClick={() => setRunning(Status.start)}>Start</button>
        )}

        {running === Status.start && (
          <button onClick={() => setRunning(Status.pause)}>Pause</button>
        )}
        {(running === Status.start || running === Status.pause) && (
          <button onClick={() => resetValue()}>Reset</button>
        )}

        {running === Status.pause && (
          <button onClick={() => setRunning(Status.start)}>Resume</button>
        )}
      </div>
    </>
  );
}
function StopWatch() {
  return (
    <div style={{ height: "100vh", width: "100%", background: "green" }}>
      <h1> StopWatch</h1>
      <Clock />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <StopWatch />
    </div>
  );
}


export default App;
