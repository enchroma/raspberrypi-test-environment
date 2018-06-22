import xhr from "xhr";

export default (state, emitter) => {
  emitter.on("site-clicked", label => {
    state.sites.forEach(site => {
      site.selected = site.label === label;
    });
    emitter.emit("render");
  });

  emitter.on("ui:powerdown:msg:set", v => {
    state.ui.showShutdown = v;
    if (v) {
      state.ui.shutdownCounter++;
    }
    emitter.emit("render");
  });


  emitter.on("ui:reboot:msg:set", v => {
    state.ui.showReboot = v;
    if (v) {
      state.ui.rebootCounter++;
    }
    emitter.emit("render");
  });

  emitter.on("ui:reboot", () => {
    console.log(`${window.location.href}reboot`);
    xhr.post(`${window.location.href}reboot`, function(err, resp) {
      console.log(resp.body);
    });
  });

   emitter.on("ui:powerdown", () => {
    console.log(`${window.location.href}shutdown`);
    xhr.post(`${window.location.href}shutdown`, function(err, resp) {
      console.log(resp.body);
    });
  });
  return {
    state,
    emitter,
  };
};
