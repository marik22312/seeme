const path = require('path');

module.exports = {
	defaults: {
		PATH: path.resolve(process.cwd(), 'screenshots'),
		// PATH: '.\/screenshots\/',
		RESOLUTIONS: ['1920x1080','1440x900','1366x768','1280x800','375x667','360x640']
	}
};

/*
360× 640– 21.54 %
    1366× 768– 12.85 %
    1920× 1080– 7.76 %
    375× 667– 4.94 %
    1440× 900– 3.32 %
    1280× 800– 2.67 %
    */