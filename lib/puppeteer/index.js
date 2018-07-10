const puppeteer = require('puppeteer');

module.exports = (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: 'C:\Users\אסף\Desktop\seeme\seeme\scrreenshot.jpg'});

  await browser.close();
};