import { useEffect, useState } from "react";
import  BroadcastChannelComp from "./broadcast-channel";


function App() {
  const [ renderBroadCast, setRenderBroadcast] = useState(true)


  useEffect(()=>{
    const timer = setTimeout(() => {
      setRenderBroadcast(false)
    }, 5000);

    return ()=>{
        clearTimeout(timer)
    }
  })
  return (
    <div className="App">
      <header className="App-header">
      <BroadcastChannelComp/>
      </header>
    </div>
  );
}

export default App;
