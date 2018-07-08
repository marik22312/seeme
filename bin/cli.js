#!/usr/bin/env node
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto('http://www.google.com');
  await page.screenshot({path: 'scrreenshot.jpg'});

  await browser.close();
})();

const figlet = require('figlet');

let fig = figlet.textSync('Capture');

console.log(fig);

