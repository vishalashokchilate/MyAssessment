define(['chai', 'jquery', 'answers'], function(chai, $, answers) {

	var assert = chai.assert;

	describe('objects and context:', function() {

		var a, b, C;

		beforeEach(function() {
			a = {
				name : 'Matt',
				greeting : 'Hello',
				sayIt : function() {
					return this.greeting + ', ' +
						this.name + '!';
				}
			};

			b = {
				name : 'Barbara',
				greeting : 'Hola'
			};

			C = function(name) {
				this.name = name;
				return this;
			};
		});

		it('you should be able to alter the context in which a method runs', function() {

			assert.typeOf(answers.alterContext, 'function', 'your answers should contain a function named alterContext');
			assert.equal(answers.alterContext.length, 2, 'alterContext should expect 2 arguments, a function and an object');

			assert.equal(answers.alterContext(a.sayIt, b), 'Hola, Barbara!', 'alterContext should execute the function in the context of the object and return the result');
		});

	});

});
