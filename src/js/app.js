import bluebird from "bluebird";
import { uniq } from "lodash";
import xhr from "xhr";
const Xhr = bluebird.promisify(xhr);

import Model from "./model";

const isProd = process.env.NODE_ENV === "production";

require("fastclick")(document.body);

var html = require("choo/html");
var log = require("choo-log");
var choo = require("choo");

var app = choo();

if (!isProd) {
  function logger(state, emitter) {
    emitter.on("*", function(messageName, data) {
      console.log("event", messageName, data);
    });
  }
  app.use(log());
  app.use(logger);
}

app.use(Model);

const onload = el => {};

//VIEWS
const menu = require("./views/menu");
const projects = require("./views/projects");
const project = require("./views/project");
const ui = require("./views/ui");
const iframe = require("./views/iframe");

function mainView(state, prev, send) {
  return html`
    <div
    class="app"
    onload=${onload}
    >
      ${projects(state, prev, send)}
      ${ui(state, prev, send)}
    </div>
  `;
}
app.route(`/`, mainView);
app.route(`/projects/:project`, project);
app.route(`/projects/:project/:item`, iframe);

/*************
 *  STATE
 ************ */
Xhr(`/projects.json`, { json: true }).then(({ body }) => {
  app.state.projects = uniq(body.map(({ project }) => project));
  app.state.projectData = body;
  app.state.ui = {
    showShutdown: false,
    showReboot: false,
    shutdownCounter: 0,
    rebootCounter: 0,
  };

  /**/
  const tree = app.start();
  document.body.appendChild(tree);
});
