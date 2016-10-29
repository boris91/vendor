import 'babel-polyfill';
import assert from 'assert';

const falseGetter = { getFalse() { return false; } };

describe('server', () => {
	describe('false-getter', () => {
		describe('get-false', () => {
			it('returns false value', () => {
				assert.equal(false, falseGetter.getFalse());
			});
		});
	});
});