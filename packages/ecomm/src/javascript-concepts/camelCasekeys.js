const source = "https://www.greatfrontend.com/questions/javascript/camel-case-keys";
// NOTE: only array and object are consider

/**
 * @template {Record<string, unknown>|Array<unknown>} T
 * @param {T} object
 * @return {T}
 */

function convertStringToCamelCase(str) {
  const strs = str.split("_");
  let res = strs[0];

  for (let i = 1; i < strs.length; i++) {
    res += strs[i][0].toUpperCase() + strs[i].substring(1)
  }
  return res;
}
export default function camelCaseKeys(object) {
  if (Array.isArray(object)) {
    return object.map((item) => camelCaseKeys(item))
  }

  if (typeof object === "object") {
    const res = {};
    for (let [key, value] of Object.entries(object)) {
      console.log(key, value)
      const camelCaseKey = convertStringToCamelCase(key);
      res[camelCaseKey] = camelCaseKeys(value)
    }
    return res;
  }

  return object;
}