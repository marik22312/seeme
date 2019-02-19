const puppeteer = require('puppeteer');
const normalizeUrl = require('normalize-url');
const fs = require('fs');
module.exports = class Capture {
	constructor(yargs) {
		this._url = normalizeUrl(yargs.url);
		this._res = yargs.res;
		this._path = yargs.path;
		this._puppeteer = null;
		this._page = null;
	}

	async _startPupeteer() {
		console.log('starting puppeteer');
		this._puppeteer = await puppeteer.launch();
		this._page = await this._puppeteer.newPage();
		
		// await browser.close();
	}
	
	async _goToPage(uri) {
		console.log('Going to page', uri);
		// TODO: Add error prevention for empty puppeteer
		await this._page.goto(uri, {
			// waitUntil: 'networkidle2'
		});
		console.log('Ready', uri);
		return;
	}
	
	async _capture(path, options = {
		fullpage: true,
		res: '1920x1080'
	}) {
		const res = options.res.split('x');
		
		console.log('Setting Viewport:', res[0] + 'x' + res[1]);
		await this._page.setViewport({
			width: parseInt(res[0]),
			height: parseInt(res[1])
		});
		console.log('Capturing');
		return await this._page.screenshot({
			fullPage: true,
			type: 'png'
		});
	}

	async _validateDirectory(filename) {
		if (fs.existsSync(this._path)) {
			return console.log(this._path, 'Exists!');
		}
		console.debug('Creating directory...');
		return fs.mkdirSync(this._path);
	}

	async _createImage(filename, data) {
		const name = this._path + '\/' + filename;
		fs.writeFileSync(name, data);
	}

	async run() {
		try {
			
			await this._startPupeteer();
			await this._goToPage(this._url);
			await this._validateDirectory();
			
			for (let i = 0; i < this._res.length; i++) {
				console.log('Capturing!', this._res[i]);
				const image = await this._capture(this._path+ this._res[i] + '.png', {
					res: this._res[i]
				});
				
				await this._createImage(this._res[i] + '.jpg', image);
				
			}
			
			this._puppeteer.close();
		} catch (err) {
			console.log(err);
			this._puppeteer.close();
		}
	}
};