const qstr = require('../qtools/qstr');

describe('chopLeft', () => {
	it('should remove text from left side', () => {
		expect(qstr.chopLeft('002-filename.txt', '002-')).toBe('filename.txt');
	});
});