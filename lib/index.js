const puppeteer = require('puppeteer');

/**
 * Add Documentation! (read JSDoc)
 * @param {string} url the url of the website we want to test
 * @returns {Promsie}
 */
module.exports = async (url) => {
	// add try catch for async functions
	// move functionallity to different location (Divide And Rule)
	const browser = await puppeteer.launch({}); // no need in empty object...
	const page = await browser.newPage();
	await page.goto(url);

	// check isMobile option (https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#pagesetviewportviewport)
	await page.setViewport({
		width: 360,
		height: 640
	});

	await page.screenshot({
		path: 'scrreenshot-mobile.jpg',
		quality: 80,
		fullPage: true
	});

	await page.setViewport({
		width: 360,
		height: 640,
		isMobile: true // watch the difference of the output image
	});

	await page.screenshot({
		path: 'scrreenshot-mobile-ismobile.jpg',
		quality: 80,
		fullPage: true
	});
	
	await page.setViewport({
		width: 1366,
		height: 768
	});
	
	await page.screenshot({
		path: 'screenshot-desktop.jpg',
		quality: 80,
		fullPage: true
	});
	await browser.close();

	// missing return statment
};