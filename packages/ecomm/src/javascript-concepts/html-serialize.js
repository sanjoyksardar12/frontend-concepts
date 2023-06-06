const source = "https://www.greatfrontend.com/questions/javascript/html-serializer"
const makeIndentedString = (str, level = 0, allowNewLine = true) => {
  let res = str.padStart(level + str.length, "\t");
  if (allowNewLine) {
    return `\n${res}`
  }
  return res;
}

export default function serializeNode(node, level = 0) {
  if (!node) {
    return node
  }
  if (typeof node === "string") {
    return makeIndentedString(node, level)
  }

  const tag = node.tag;
  const elemStart = makeIndentedString(`<${tag}>`, level, level !== 0)
  const elemEnd = makeIndentedString(`</${tag}>`, level)
  const children = node.children.map((child) => serializeNode(child, level + 1)).join("")

  const finalRes = `${elemStart}${children}${elemEnd}`; // just make in online
  return finalRes;
}

// NOTE: can be done better way , see the solution



serializeNode({
  tag: 'body',
  children: [
    { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
    { tag: 'div', children: ['baz'] },
  ],
})
