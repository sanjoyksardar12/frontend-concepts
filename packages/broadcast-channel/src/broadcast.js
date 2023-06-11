class BroadcastChannelCls{
  constructor({name = "test-channel", messageHandler = ()=>{}, errorMessagehandler = ()=>{}}){
    this.broadcast = null;
    this.messageHandler = messageHandler;
    this.errorMessagehandler = errorMessagehandler;
    this.init(name);
  }

  init(name){
    this.broadcast = new BroadcastChannel(name);
    this.broadcast.addEventListener("message", this.messageHandler)
    this.broadcast.addEventListener("messageerror", this.errorMessagehandler)
  }
  broadcastMessage (content){
    console.log("psoting....")
    this.broadcast.postMessage(content);
  }
  closeConnection(){
    debugger
    console.log("Closign copnnection....")
    this.broadcast.close()
  }
}

export default BroadcastChannelCls;