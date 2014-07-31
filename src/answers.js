/**
 * Please do not add answers directly in this file.
 * There is an answers-*.js file for each tests-*.js file.
 * Please put your code into those files.
 */

(function() {

	var candidateAnswers = [
		'answers-jquery',
		'answers-objects-and-context',
		'answers-strings',
		'answers-arrays',
		'answers-logic',
		'answers-recursion'
	];

	define(['jquery', 'answers-basic-setup'].concat(candidateAnswers), function($) {
		var args, result;

		// get all dependencies except jQuery
		args = $.makeArray(arguments).splice(1);

		// merge them into a single object
		result = $.extend.apply($, [{}].concat(args));

		return result;
	});

}());
