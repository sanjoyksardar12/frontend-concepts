const source = "https://www.greatfrontend.com/questions/javascript/drop-while";

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropWhile(array, predicate) {
  let index;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (predicate(value)) {
      index = i;
    } else {
      break;
    }
  }
  return array.slice(index+1)
}