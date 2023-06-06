// Refer to https://github.com/lodash/lodash/blob/4.17.15-es/TODO_REPLACE_ME.js
// Refer to https://github.com/lodash/lodash/blob/4.17.15-es/TODO_REPLACE_ME.js

/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
export default function isEmpty(value) {
  if (value == null) { //note thid
    return true;
  }
  const type = typeof value;

  //Array/String/Buffer
  if (Array.isArray(value)
    || type === "string"
    || Buffer.isBuffer(value)) {
    return value.length === 0;
  }

  //Map/Set
  if(value instanceof Map || value instanceof Set){
    return value.size === 0;
  }

  //plain object
  const prototype = Object.getPrototypeOf(value)
  if(prototype === null ||  prototype === Object.prototype){
    return Object.keys(value).length === 0;
  }

  return true;
}


console.log(isEmpty(true) === true)
console.log(isEmpty(1) === true)
console.log(isEmpty(NaN) === true)
console.log(isEmpty(/x/) === true)
console.log(isEmpty(Symbol('x')) === true)
console.log(isEmpty() === true)