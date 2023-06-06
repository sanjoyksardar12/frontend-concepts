const source = "https://www.greatfrontend.com/questions/javascript/classnames";

const mergeStrings = (str1, str2) => {
  if (str1 || str2) {
    return str1 + " " + str2;
  }
  return str1 || str2
}

function classNames(...args) {
  return args.reduce((acc, item) => {
    if (!item) {
      return acc;
    }

    const valueType = typeof item;

    if (valueType === "string" || valueType === "number") {
      return mergeStrings(acc, item)
    }

    if (Array.isArray(item)) {
      const res = item.map(value => classNames(value)).join(" ")
      return mergeStrings(acc, res);
    }

    const res = Object.entries(item)
      .reduce((subAcc, [key, value]) => {
        if (value) {
          return mergeStrings(subAcc, key);
        }
        return subAcc;
      }, "")
    return mergeStrings(acc, res);
  }, "")
}

console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '').length)