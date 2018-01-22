import { uniq } from "lodash"
import html from "choo/html"

module.exports = ({text, url}, emit) => {
  console.log(url);
  return html`
        <a class="project-button"
        href="${url}"
        target="_self"
        >
          <span>${text}</span>
        </a>
      `
}
