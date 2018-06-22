import { noop } from "lodash"
import parse from "path-parse"
import html from "choo/html"

const TOTAL_CLICKS = 3

module.exports = (state, emit) => {
  let _to
  function startT() {
    _to = setTimeout(function() {
      emit("ui:powerdown:msg:set", false)
      emit("ui:reboot:msg:set", false)
    }, 3000)
  }
  return html`
    <div>
        <div class="reboot" onclick=${e => {
          if (state.ui.rebootCounter === TOTAL_CLICKS - 1) {
            emit("ui:reboot:msg:set", false)
            emit("ui:reboot")
          } else {
            emit("ui:reboot:msg:set", true)
          }
          clearTimeout(_to)
          startT()
        }}>${
    state.ui.showReboot
      ? `click ${TOTAL_CLICKS - state.ui.rebootCounter} times`
      : null
  }</div>

  <div class="shutdown" onclick=${e => {
    if (state.ui.shutdownCounter === TOTAL_CLICKS - 1) {
      emit("ui:powerdown:msg:set", false)
      emit("ui:powerdown")
    } else {
      emit("ui:powerdown:msg:set", true)
    }
    clearTimeout(_to)
    startT()
  }}>${
    state.ui.showShutdown
      ? `click ${TOTAL_CLICKS - state.ui.shutdownCounter} times`
      : null
  }</div>

    </div>
      `
}
