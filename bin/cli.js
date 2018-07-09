#!/usr/bin/env node

const figlet = require('figlet');
let fig = figlet.textSync('Capture.js');
console.log(fig);
const yargs = argv = require('yargs')
	.usage('Usage: capture -u <URL> -r [comma-seperated resolutions] -p')
	.demand(['u'])
	.alias('u', 'url')
	.alias('r', 'resolutions')
	.alias('p', 'path')
	.describe('u', 'URL to test.')
	.describe('r', 'Comma-seperated resolution list (for example: 1920x1200,1024x768)')
	.describe('p', 'fullpath to save the file to')
	.argv;
    

