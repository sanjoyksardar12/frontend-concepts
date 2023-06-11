import { useEffect, useState } from "react";
import BroadcastChannelCls from "./broadcast";

function BroadcastChannelComp() {
  const [broadcast, setBroadCast] = useState(null)
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  const [formValue, setFormValue] = useState("")

  const messageHandler = function (messageEvent) {
    setMessages(messages => [...messages, messageEvent.data]);
  }

  const errorMessagehandler = function (error) {
    setErrorMessage(error)
  }

  useEffect(() => {
    const instance = new BroadcastChannelCls({
      name: "testing",
      messageHandler,
      errorMessagehandler
    })

    setBroadCast(instance)
    console.log("instance==", instance)
    return ()=>{
      setBroadCast(null)
      console.log("instance== when closing...", instance)
      console.log("Closing connection... calling")
      instance?.closeConnection()
    }
  }, [])

  const handleSubmit = function (event) {
    event.preventDefault();
    setMessages(messages=> [...messages, formValue])
    broadcast.broadcastMessage(formValue);
    setFormValue("")
  }

  return (<>
    <h3>BroadcastChannel Component</h3>
    <p><i>data will be share between tabs and iframe</i></p>
    <form onSubmit={handleSubmit}>
      Message: <input type="text" value={formValue} onChange={e => setFormValue(e.target.value)} />
      <button onSubmit={handleSubmit} >Submit</button>
    </form>


    <div style={{ border: "1px solid grey", padding: "20px", margin: "20px" }}>
      <h6>Messages: </h6>
      {
        messages.map((message, index) => <p key={index}>{message}</p>)
      }
    </div>

    <div style={{ border: "1px solid grey", padding: "20px", margin: "20px" }}>
      <h6>Error Message: </h6>
      <p>{errorMessage}</p>
    </div>
  </>)
}

export default BroadcastChannelComp;