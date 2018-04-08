import { uniq } from "lodash"
import html from "choo/html"

module.exports = ({text, url, redirect}, emit) => {
  return html`
        <a class="project-button"
        href="${url}"
        onclick=${e=>{
          if(redirect){
            e.preventDefault()
          }
        }}
        target="_self"
        >
          <span>${text}</span>
        </a>
      `
}
