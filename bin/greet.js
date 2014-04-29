#!/usr/bin/env node
var greet = require("../index.js");
args = require('minimist')(process.argv.slice(2));
console.log(greet(args._, args.drunk))