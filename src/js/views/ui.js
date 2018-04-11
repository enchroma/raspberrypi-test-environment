import { noop } from "lodash";
import parse from "path-parse";
import html from "choo/html";

const TOTAL_CLICKS = 3;

module.exports = (state, emit) => {
  let startT = () => {
    setTimeout(() => {
      emit("ui:powerdown:msg:set", false);
    }, 3000);
  };
  return html`
        <div class="shutdown" onclick=${e => {
          if (state.ui.shutdownCounter === TOTAL_CLICKS - 1) {
            emit("ui:powerdown:msg:set", false);
            emit("ui:powerdown");
          } else {
            emit("ui:powerdown:msg:set", true);
          }
        }}>${
    state.ui.showShutdown
      ? `click ${TOTAL_CLICKS - state.ui.shutdownCounter} times`
      : null
  }</div>
      `;
};
