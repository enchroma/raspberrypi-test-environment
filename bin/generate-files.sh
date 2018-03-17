#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const readDir = require("readdir")
const filesArray = readDir.readSync('public/projects', ['**.html'] );


fs.writeFileSync("public/projects.json" , JSON.stringify(filesArray.map(p=>({project:path.parse(p).dir, path: path.parse(p).base})), null, 4))