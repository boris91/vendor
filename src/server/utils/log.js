require('colors');
const isDev = process.env.NODE_ENV === 'dev';
const STAMP = '[hype]'.white.bgBlue + ' ';

class Log {
	constructor(text, color1, color2, skipFirstStamp) {
		this.clear(skipFirstStamp).pipe(text, color1, color2);
	}

	clear(skipStamp) {
		this._text = skipStamp ? '' : STAMP;
		return this;
	}

	pipe(text, color1, color2) {
		color1 && (text = text[color1]);
		color2 && (text = text[color2]);
		this._text += text;
		return this;
	}

	newLine() {
		this._text += `\n${STAMP}`;
		return this;
	}

	print(ignoreEnv) {
		if (ignoreEnv || isDev) {
			console.log(this._text);
		}
		return this;
	}
};

module.exports = Log;