#!/usr/bin/env node
var greet = require("../lib/index");
args = require('minimist')(process.argv.slice(2));
console.log(greet(args._, args.drunk))