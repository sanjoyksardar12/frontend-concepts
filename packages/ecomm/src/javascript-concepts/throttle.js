const source = "https://www.greatfrontend.com/questions/javascript/throttle";

const throttle = (func, delay)=>{
  let timer  = false;
  return function(...args){
    if(timer){
      return;
    }

    const context = this;
    func.apply(context, args);

    timer = true;
    
    setTimeout(() => {
      timer = false;
    }, delay);
  }
}

export default throttle;