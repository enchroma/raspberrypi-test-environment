import { noop } from "lodash"
import parse from "path-parse"
import html from "choo/html"
import projectButton from "./project-button"

module.exports = (state, emit) => {
  return html`
      <div class="full">
        <iframe class="iframe" src="${state.href.replace('projects', 'html')}"></iframe>
        </div>
      `
}
