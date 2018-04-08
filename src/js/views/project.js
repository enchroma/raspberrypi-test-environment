import { noop } from "lodash"
import parse from "path-parse"
import html from "choo/html"
import projectButton from "./project-button"

module.exports = (state, emit) => {
  const itterations = state.projectData.filter(
    item => item.project === state.params.project
  )
  return html`
        <div class="full project-itteration">
            ${itterations.map(item =>
              projectButton(
                { text: item.path, url: `/projects/${item.project}/${item.path}` },
                emit
              )
            )}
        </div>
      `
}


/*
import { noop } from "lodash"
import parse from "path-parse"
import html from "choo/html"
import projectButton from "./project-button"

module.exports = (state, emit) => {
  const itterations = state.projectData.filter(
    item => item.project === state.params.project && item.project.indexOf('/') < 0
  )
  return html`
        <div class="full project-itteration">
            ${itterations.map(item =>
              projectButton(
                { text: item.path, url: `/project=${item.project}&name=${item.path}`, redirect:true },
                emit
              )
            )}
        </div>
      `
}

*/