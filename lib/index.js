const puppeteer = require('puppeteer');

module.exports = async (url) => {
	const browser = await puppeteer.launch({});
	const page = await browser.newPage();
	await page.goto(url);
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
		width: 1366,
		height: 768
	});
	await page.screenshot({
		path: 'screenshot-desktop.jpg',
		quality: 80,
		fullPage: true
		});
	await browser.close();
};