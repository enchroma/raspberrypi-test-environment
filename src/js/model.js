export default (state, emitter) => {
  emitter.on("site-clicked", label => {
    state.sites.forEach(site => {
      site.selected = site.label === label
    })
    emitter.emit("render")
  })

  return {
    state, emitter
  }
}
