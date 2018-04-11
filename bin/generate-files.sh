#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const readDir = require("readdir")

const PROJECTS = ["4afc", "after-image-v1"]

const filesArray = readDir.readSync('public/static', ['**.html']).filter(p=>PROJECTS.indexOf(path.parse(p).dir) > -1);

console.log(filesArray);

fs.writeFileSync("public/static/projects.json" , JSON.stringify(filesArray.map(p=>({project:path.parse(p).dir, path: path.parse(p).base})), null, 4))