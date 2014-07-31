define(['chai', 'jquery', 'answers'], function(chai, $, answers) {

	var assert = chai.assert;

	describe('logic:', function() {

		it('you should be able to work with logical and', function() {

			assert.notOk(answers.and(false, true), 'and(false, true) should be falsy');
			assert.ok(answers.and(true, true), 'and(false, false) should be truthy');

			assert.notOk(answers.and(1, 0), 'and(1, 0) should be falsy');
			assert.ok(answers.and(3, 4), 'and(3,4) should be truthy');
		});

		it('you should be able to work with logical or', function() {

			assert.ok(answers.or(true, false), 'or(true, false) should be truthy');
			assert.ok(answers.or(true, true), 'or(true, true) should be truthy');
			assert.notOk(answers.or(false, false), 'or(false, false) should be falsy');

			assert.notEqual(answers.or(3, 4), 7, 'or(3,4) should not return 7');
		});
	});
});
