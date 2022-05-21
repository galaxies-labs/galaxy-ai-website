const domParser = new DOMParser()
/**
 *
 * @param {string} str
 */
export const replaceHtmlTags = (str) => {
  return str.replace(/(&nbsp;|<([^>]+)>)/gi, "")
}

/**
 *
 * @param {string} str
 */
export const genHtmlByText = (str) => {
  return domParser.parseFromString(str, "text/html")
}
