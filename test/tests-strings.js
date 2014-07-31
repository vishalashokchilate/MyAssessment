define(['chai', 'jquery', 'answers'], function(chai, $, answers) {

	var assert = chai.assert;

	function invocation(testeeName, args, desc) {
		return testeeName + '(' + args.join(',') + ')' + desc;
	}

	describe('strings:', function() {

		it('you should be able to repeat a string', function() {
			assert.typeOf(answers.repeatString, 'function', 'your answers should contain a function named repeatString');
			assert.equal(answers.repeatString.length, 2, 'repeatString should expect 2 arguments, a string and an integer');

			assert.equal(answers.repeatString('a', 5), 'aaaaa', 'repeatString("a", 5) should return "aaaaa"');
			assert.equal(answers.repeatString('bcd', 2), 'bcdbcd', 'repeatString("bcd", 2) should return "bcdbcd"');
			assert.equal(answers.repeatString('feg', 0), '', 'repeatString("feg", 0) should return an empty string');
		});

		it('you should be able to match a string against a pattern', function() {
			var testeeName = 'validatePhonenumber',
				testee = answers[testeeName],
				args;

			assert.typeOf(testee, 'function', 'your answers should contain a function named ' + testeeName);
			assert.equal(testee.length, 1, testeeName + ' should expect 1 argument, a string');

			args = ['555-123-4567'];
			assert.ok(testee.apply(null, args), invocation(testeeName, args, ' should return a truthy value'));

			args = ['555.123.4567'];
			assert.ok(testee.apply(null, args), invocation(testeeName, args, ' should return a truthy value'));

			args = ['555 123 4567'];
			assert.ok(testee.apply(null, args), invocation(testeeName, args, ' should return a truthy value'));

			args = ['5551234567'];
			assert.ok(testee.apply(null, args), invocation(testeeName, args, ' should return a truthy value'));

			args = ['555.123-4567'];
			assert.notOk(testee.apply(null, args), invocation(testeeName, args, ' should return a falsy value'));

			args = ['555/123/4567'];
			assert.notOk(testee.apply(null, args), invocation(testeeName, args, ' should return a falsy value'));

			args = ['55.123.4567'];
			assert.notOk(testee.apply(null, args), invocation(testeeName, args, ' should return a falsy value'));

			args = ['555.1234.567'];
			assert.notOk(testee.apply(null, args), invocation(testeeName, args, ' should return a falsy value'));
		});


	});
});
