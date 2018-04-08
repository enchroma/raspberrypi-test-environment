import html from "choo/html"
import projectButton from "./project-button"

module.exports = (state, emit) => {
  const { projectData, projects } = state
  if (!projectData) return null
  return html`
        <div class="full projects">
          ${projects
            .filter(project => project.indexOf("/") < 0)
            .map(name =>
              projectButton(
                { text: name, url: `/projects/${name}` },
                emit
              )
            )}
        </div>
      `
}
