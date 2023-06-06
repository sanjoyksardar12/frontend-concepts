const source = "https://www.greatfrontend.com/questions/javascript/jquery-css";

/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
  const elem = document.querySelector(selector);

  return {
    css: function (prop, value) {
      if (!value) {
        if (!elem) {
          return undefined;
        }

        const value = elem["style"][prop];
        return value === "" ? undefined : value
      }

      if (elem) {
        elem.style[prop] = value;
      }
      return this;
    }
  }
}