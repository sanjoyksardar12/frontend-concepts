const source = "https://www.greatfrontend.com/questions/javascript/flatten";

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  if (!Array.isArray(value)) {
      return [value];
  }
  return value.reduce((acc, item) => [...acc, ...flatten(item)], [])

}