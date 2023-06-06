const source = "https://www.greatfrontend.com/questions/javascript/get-elements-by-tag-name";
/**
 * @param {Element} rootElement
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(rootElement, tagName) {
  const forChildNodes = (elem) => {
      return [...elem.children].reduce((acc, child) => [
        ...acc,
        ...getElements(child, tagName)
      ], []) || [];
    }

  const getElements = (elem) => {
    if (!elem) {
      return [];
    }
    if (elem.tagName.toUpperCase() === tagName.toUpperCase()) {
      return [elem, ...forChildNodes(elem)];
    }
    return forChildNodes(elem);
  }

  return forChildNodes(rootElement)
}

function checkResults(expected, received) {
  console.log(expected.length === received.length)
  for (let i = 0; i < received.length; i++) {
    console.log(received[i].isEqualNode(expected[i]))
  }
}


const document = new DOMParser().parseFromString(
  `<div></div>`,
  'text/html',
);

const imgs = getElementsByTagName(document.body, 'img');
const expected = document.body.getElementsByTagName('img');
checkResults(expected, imgs);