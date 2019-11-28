#!/usr/bin/env node
const mdLinks = require('./lib/index.js')

const path = process.argv[2]

console.log(process.argv);

mdLinks(path)
.then(result => console.log(result))
.catch(error => console.log(error))