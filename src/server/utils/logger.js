const Log = require('./log');

class Logger {
	static print(text, color1, color2, ignoreEnv) {
		return new Log(text, color1, color2).print(ignoreEnv);
	}

	static error(errorObj) {
		return Logger.pipe(errorObj.message, 'red');
	}

	static pipe(text, color1, color2) {
		return new Log(text, color1, color2);
	}

	static createEmptyLog() {
		return new Log('', '', '', true);
	}
};

module.exports = Logger;