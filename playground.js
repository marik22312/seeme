// Testing file

const puppeteerHandler = require('./lib/index.js');

(async () => {

	try {
		let res = await puppeteerHandler('http://www.google.com');
		console.log(res);
	} catch (err) {
		console.log(err);
	}
})();