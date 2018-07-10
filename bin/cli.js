#!/usr/bin/env node
const config = require('../lib/config.js');
const figlet = require('figlet');
let fig = figlet.textSync('Capture.js');
console.log(fig);
const yargs = argv = require('yargs')
	.usage('Usage: capture -u <URL> -r [comma-seperated resolutions] -p')
	.option('url', {
		alias: 'u',
		demand: true,
		type: 'string',
		describe: 'URL to test'
	})
	.option('res', {
		alias: 'r',
		default: config.defaults.PATH,
		demand: true,
		type: 'string',
		describe: 'fullpath to save the file to'
	})
	.option('path', {
		alias: 'p',
		demand: true,
		default: config.defaults.RESOLUTIONS,
		type: 'string',
		describe: 'omma-seperated resolution list'
	})
	.argv;
