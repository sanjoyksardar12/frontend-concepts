const source ="https://www.greatfrontend.com/questions/javascript/fill";

/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  const length = array.length;

  if (start < 0) {
    start = length + start;
  }

  if (end > length) {
    end = length;
  }

  if (end < 0) {
    end += length;
  }

  for (let i = start; i < Math.min(end, array.length); i++) {
    array[i] = value
  }
  return array
}