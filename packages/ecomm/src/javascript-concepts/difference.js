// source : https://www.greatfrontend.com/questions/javascript/difference
/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
  const result = [];

  const valuesSet = new Set(values);
  array = array.filter(() => true) // important

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (!valuesSet.has(value)) {
      result.push(value)
    }

  }
  return result
}


// note: https://dev.to/trinityyi/javascript-sparse-array-and-how-to-avoid-them-2cgm