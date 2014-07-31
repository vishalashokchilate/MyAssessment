define(['chai', 'jquery', 'answers'], function(chai, $, answers) {

	var assert = chai.assert;

	describe('jquery:', function() {
		var playground;


		beforeEach(function() {
			playground = $('<div id="playground"><span>1</span></div>').appendTo('body');
		});

		afterEach(function() {
			playground.remove();
		});

		it('you should be able to bind an event handler', function() {
			var events = [];

			function onClickHandler(evt) {
				events.push({event: evt, element: $(this).text()});
			}

			assert.typeOf(answers.handleClickOnSpan, 'function', 'your answers should contain a function named handleClickOnSpan');
			assert.equal(answers.handleClickOnSpan.length, 2, 'handleClickOnSpan should expect 2 arguments, a DOM node and a function');

			answers.handleClickOnSpan(playground.get(0), onClickHandler);
			assert.equal(0, events.length, 'the function should not be called until a click event happens on any SPAN element that is a child of the DOM node');

			playground.find('span').first().trigger('click');
			assert.equal(1, events.length, 'the function should be bound to click events on any SPAN element that is a child of the DOM node');

			$('<span>2</span>').appendTo(playground).trigger('click');
			assert.equal(2, events.length, 'the function should be bound to click events on any SPAN element dynamically added to the DOM node');

			assert.equal(events[1].element, '2', 'the context in which the function is executed should be the element on which the event occurred');
		});

		it('you should be able to load data asynchronously', function() {
			function done() { return !!result; }

			var promise, result, url = '/base/data/testdata.json';

			assert.typeOf(answers.getTheNames, 'function', 'your answers should contain a function named getTheNames');
			assert.equal(answers.getTheNames.length, 1, 'getTheNames should expect 1 argument, a string containing a URL');

			runs(function() {
				promise = answers.getTheNames(url);

				assert.typeOf(promise.then, 'function', 'getTheNames should return a promise');

				promise.then(function(data) {
					result = data;
				});
			});

			waitsFor(done, 1000);

			runs(function() {
				assert.isArray(result, 'The promise should be resolved with an array');

				assert.equal(result.join(' '), 'Adam Alex Matt Paul Rebecca');
			})
		});

	});

});
