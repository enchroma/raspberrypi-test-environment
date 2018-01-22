
import html from "choo/html"
import projectButton from "./project-button"

module.exports = (state, emit) => {
  const {projectData, projects} = state
  if (!projectData) return null
  return html`
        <div class="projects">
          ${projects.map(name =>
            projectButton({ text: name, url: `http://${window.location.host}/project-itterations/${name}` }, emit)
          )}
        </div>
      `
}
