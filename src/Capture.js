const puppeteer = require('puppeteer');

module.exports = class Capture {
	constructor(yargs) {
		this._url = yargs.url;
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
		
		console.log('Setting VP');
		await this._page.setViewport({
			width: parseInt(res[0]),
			height: parseInt(res[1])
		});
		console.log('Capturing');
		await this._page.screenshot({
			path,
			fullPage: true,
			type: 'png'
		});
	}

	async run() {
		await this._startPupeteer();
		await this._goToPage(this._url);
		console.log('Running!');
		for (let i = 0; i < this._res.length; i++) {
			console.log('Capturing!', this._res[i]);
			await this._capture(this._path+ i + '.png', {
				res: this._res[i]
			})
				.then(res => console.log('YEAH!'))
				.catch(err => console.log('NEIN!', err));
		}
	}
};