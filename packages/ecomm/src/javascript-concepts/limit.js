const source = "https://www.greatfrontend.com/questions/javascript/limit";

/**
 * @callback func
 * @param {number} n
 * @return {Function}
 */
export default function limit(func, n) {
  let count = n;
  let res;
  
  return function (...args) {
    const context = this;
    if (count) {
      count--;
      res = func.apply(context, args)
      return res;
    }
    return res;
  }
}
