#!/usr/bin/env node
const config = require('../lib/config.js');
const figlet = require('figlet');

let fig = figlet.textSync('Capture.js');
console.log(fig);

const yargs = argv = require('yargs')
	.usage('Usage: capture -u <URL> -r [comma-seperated resolutions] -p "./screenshots"')
	.option('url', {
		alias: 'u',
		demand: true,
		type: 'string',
		describe: 'URL to test'
	})
	.option('res', {
		alias: 'r',
		default: config.defaults.PATH,
		type: 'string',
		describe: 'fullpath to save the file to'
	})
	.option('path', {
		alias: 'p',
		default: config.defaults.RESOLUTIONS,
		type: 'string',
		describe: 'omma-seperated resolution list'
	})
	.option('landscape', {
		alias: 'l',
		default: false,
		type: 'boolean',
		describe: 'Mobile also captures landscape'
	})
	.option('grid', {
		alias: 'g',
		default: false,
		type: 'boolean',
		describe: 'Show grid on photo [Unreleased]'
	})
	.argv;
