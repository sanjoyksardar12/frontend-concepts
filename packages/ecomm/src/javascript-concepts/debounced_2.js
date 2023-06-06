const soruce = "https://www.greatfrontend.com/questions/javascript/debounce-ii";

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer;
  let latestArgs = [];
  let context;

  function clearTimer() {
    clearTimeout(timer);
    timer = null;
  }

  const debounced = function (...args) {
    context = this;
    latestArgs = args;


    clearTimer()
    timer = setTimeout(() => {
      func.apply(context, latestArgs);
      clearTimer()
    }, wait)
  }

  debounced.cancel = function () {
    clearTimer()
  }

  debounced.flush = function () {
    if (timer) {
      func.apply(context, latestArgs)
    }
    clearTimeout(timer)
  }
  return debounced;
}



let i = 0;
const increment = debounce(() => {
  i++;
}, 200);

console.log(i === 0)
increment();
console.log(i === 0)

setTimeout(() => {
  console.log(i === 1)
}, 300);

setTimeout(() => {
  console.log(i === 1)
  increment.flush();
  console.log(i === 1)
  // Add a longer delay because the browser timer is unreliable.
}, 500);


// NOTE: Timer object will not be undefined or null , we have ot manually set undefined or null 
// before implementing make all type of examples
// use the previously defined format 