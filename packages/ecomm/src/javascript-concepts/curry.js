const source = "https://www.greatfrontend.com/questions/javascript/curry";

/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  const len = func.length;

  return function curried(...args) {
    const context = this;
    if (args.length === len) {
      return func.apply(context, args);
    }
    return function (...args2) {
      return curried.apply(context, [...args, ...args2])
    }
  }
}


const curried = curry(function (val) {
  return this.multiplier * val;
});

const obj = { multiplier: 5, mul: curried };
console.log(obj.mul(7) === 35)