const PORT = 8080
const ip = require("ip")
const path = require("path")
const querystring = require("querystring")
const express = require("express")
const app = express()
app.use(express.static(path.join(__dirname, "public/static")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

/*res.render("after-image-006-rgb", {
    SOCKET_URL: `"${ip.address()}:${PORT}"`,
  })*/

app.use("/views", function(req, res, next) {
  //const indexEjs = path.resolve(__dirname, "public/projects", "index")
  const { dir, name } = path.parse(req.originalUrl.replace(req.baseUrl, ""))
  console.log(dir, name);
    res.render("index", {
      SOCKET_URL: `"${ip.address()}:${PORT}"`,
      PROJECT: `../public/static/${path.parse(dir).base}/${path.parse(name).name}.html`,
    })
})

// app.set("view engine", "ejs")
// app.set("views", path.join(__dirname, "views"))

/*app.get("/p", (req, res) => {
  const { project, name } = req.query
  if (project) {
    res.render("index", {
      SOCKET_URL: `"${ip.address()}:${PORT}"`,
      PROJECT: `${path.parse(project).base}/${path.parse(name).name}.html`,
    })
  } else {
    res.sendFile(path.join(__dirname, "public/static/index.html"))
  }
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/static/index.html"))
})*/

app.get("/projects/*", (req, res) => {
  const { dir, name } = path.parse(req.originalUrl)
  const query = querystring.stringify({
    project: dir,
    name: name,
  })
  res.redirect("/")
  /*res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.redirect("/?" + query)*/
})
/*app.get("*.ejs", (req, res) => {
  console.log(req);
  return res.redirect("/")
})*/

/*app.get("*", (req, res) => {
  console.log(req)
  res.sendFile(path.join(__dirname, "views/bundle.js"))
})*/

const server = app.listen(PORT)

const io = require("socket.io")(server)

const sockets = []
io.on("connection", function(socket) {
  sockets.push(socket)
  socket.on("disconnect", function() {
    sockets.splice(sockets.indexOf(socket), 1)
  })
})

/*const PythonShell = require('python-shell');
const pyshell = new PythonShell('pyth.py');

pyshell.on('message', function (message) {
    for (var i = 0; i < sockets.length; i++) {
      sockets[i].emit('color', message)
    }
});*/

console.log(`http://${ip.address()}:${PORT}`)
