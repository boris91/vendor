import 'babel-polyfill';
import assert from 'assert';

const trueGetter = { getTrue() { return true; } };

describe('client', () => {
	describe('true-getter', () => {
		describe('get-true', () => {
			it('returns true value', () => {
				assert.equal(true, trueGetter.getTrue());
			});
		});
	});
});