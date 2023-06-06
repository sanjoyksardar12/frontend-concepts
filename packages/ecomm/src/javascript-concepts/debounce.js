const source = "https://www.greatfrontend.com/questions/javascript/debounce";

const debounce = (func, delay)=>{
  let timer ;
  return function(...args){
    const that = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(that, args)
    }, delay);
  }
}

export default debounce;