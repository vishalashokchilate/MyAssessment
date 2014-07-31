define(['chai', 'jquery', 'answers'], function(chai, $, answers) {

	var assert = chai.assert;

	function randomArray() {
		var arr = [],
			size = parseInt(/^\d/.exec((Math.random() + '').replace(/^[0.]+/, '')).pop(), 10) + 2;

		while (arr.length < size) {
			arr.push(Math.random());
		}

		return arr;
	}

	describe('arrays:', function() {

		it('you should be able to find duplicate values in an array', function() {
			var orig, ret;

			assert.typeOf(answers.arrayDupes, 'function', 'your answers should contain a function named arrayDupes');
			assert.equal(answers.arrayDupes.length, 1, 'arrayDupes should expect an array as only formal parameter');

			orig =  [1, 2, 3, 3, 1, 3, 1, 4];
			ret = answers.arrayDupes(orig);

			assert.isArray(ret, 'your function should return an array');
			assert.equal(ret.length, 2, 'you should have found 2 duplicate values');
			assert.isTrue(ret.indexOf(1) > -1, 'you should have found 1 to be a duplicate');
			assert.isTrue(ret.indexOf(3) > -1, 'you should have found 3 to be a duplicate');
		});

		it('you should be able to prepend a value to an array', function() {
			var data, ret;

			assert.typeOf(answers.arrayPrepend, 'function', 'your answers should contain a function named arrayPrepend');
			assert.equal(answers.arrayPrepend.length, 2, 'arrayPrepend should expect 2 arguments, an array and any value');

			data = [1, 2];
			ret = answers.arrayPrepend(data, 0);

			assert.isUndefined(ret, 'your function should not return a value');

			assert.equal(data.length, 3, 'arrayPrepend should add the second argument to the array passed as first argument');
			assert.equal(data[0], 0, 'the new value should have been added at the front of the array');
			assert.equal(data.join(','), '0,1,2', 'the other values in the array should not be changed');
		});

		it('you should be able to prepend a variable amount of values to an array', function() {
			var orig, add, ret;

			assert.typeOf(answers.arrayPrependAll, 'function', 'your answers should contain a function named arrayPrependAll');
			assert.equal(answers.arrayPrependAll.length, 1, 'arrayPrependAll should expect an array as only formal parameter');

			orig = [1, 2];
			add = randomArray();

			ret = answers.arrayPrependAll.apply(orig, $.merge([orig], add.slice(0)));

			assert.isUndefined(ret, 'your function should not return a value');

			assert.equal(orig.length, add.length + 2, 'arrayPrependAll should add all arguments past the first one to the array');
			assert.equal(orig[0], add[0], 'the new values should have been added at the front of the array');
			assert.equal(orig[1], add[1], 'the new values should have been added at the front of the array');
			assert.equal(orig.join(','), add.join(',') + ',1,2', 'the other values in the array should not be changed');
		});

	});
});
