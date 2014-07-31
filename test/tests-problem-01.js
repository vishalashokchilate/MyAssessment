define(['chai', 'jquery', 'answers-problem-01'], function(chai, $, answer) {

	var assert = chai.assert;

	describe('Problem 01:', function() {

		it('you should be able to get rid of the exception', function() {
			var ret, ex;

			try {
				ret = answer();
			} catch (e) {
				ex = e;
			}

			assert.isUndefined(ex);
			assert.equal(ret, "I AM JOHN!");
		})

	});
});
