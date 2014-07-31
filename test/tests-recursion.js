define(['chai', 'jquery', 'answers'], function(chai, $, answers) {

	var assert = chai.assert;

	var fileData = {
		dir : 'app',
		files : [
			'index.html',
			{
				dir : 'js',
				files: [
					'main.js',
					'app.js',
					'misc.js',
					{
						dir : 'vendor',
						files : [
							'jquery.js',
							'underscore.js'
						]
					}
				]
			},
			{
				dir : 'css',
				files : [
					'reset.css',
					'main.css'
				]
			}
		]
	};

	describe('recursion:', function() {

		it('you should be able to return a list of files from the data', function() {
			var result;

			assert.typeOf(answers.listFiles, 'function', 'your answers should contain a function named listFiles');
			assert.equal(answers.listFiles.length, 2, 'listFiles should expect 2 arguments, an object describing a file system and an optional filter string');

			result = answers.listFiles(fileData);

			assert.isArray(result, 'your function should return an array containing all files listed in the data');
			assert.equal(result.length, 8, 'you should have found 8 files');

			assert.isTrue(result.indexOf('index.html') > -1, 'you should have found index.html');
			assert.isTrue(result.indexOf('main.js') > -1, 'you should have found main.js');
			assert.isTrue(result.indexOf('underscore.js') > -1, 'you should have found underscore.js');
			assert.isTrue(result.indexOf('reset.css') > -1, 'you should have found reset.css');
		});

		it('you should be able to return a list of files in a subdir', function() {
			var result;

			assert.typeOf(answers.listFiles, 'function', 'your answers should contain a function named listFiles');
			assert.equal(answers.listFiles.length, 2, 'listFiles should expect 2 arguments, an object describing a file system and an optional filter string');

			result = answers.listFiles(fileData, 'js');

			assert.isArray(result, 'your function should return an array containing all files listed in the data that are in or below the given subdir');
			assert.equal(result.length, 5, 'you should have found 5 files');

			assert.isTrue(result.indexOf('app.js') > -1, 'you should have found app.js');
			assert.isTrue(result.indexOf('main.js') > -1, 'you should have found main.js');
			assert.isTrue(result.indexOf('misc.js') > -1, 'you should have found misc.js');

			assert.isTrue(result.indexOf('jquery.js') > -1, 'you should have found jquery.js');
			assert.isTrue(result.indexOf('underscore.js') > -1, 'you should have found underscore.js');
		});

	});
});
