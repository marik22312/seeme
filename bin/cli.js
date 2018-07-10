#!/usr/bin/env node
const main = require('../lib/index.js');
const figlet = require('figlet');
let fig = figlet.textSync('Capture.js');
console.log(fig);
const yargs = require('yargs')
	.usage('Usage: capture -u <URL> -r [comma-seperated resolutions] -p \"test/capture\"')
	.demand(['u'])
	.alias('u', 'url')
	.alias('r', 'resolutions')
	.alias('p', 'path')
	.describe('u', 'URL to test.')
	.describe('r', 'Comma-seperated resolutions')
	.describe('p', 'fullpath to save the file to')
	.argv;
	
main(yargs.u);

