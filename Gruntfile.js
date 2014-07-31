module.exports = function(grunt) {

	var dist = 'dist/citrix-js-assessment';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
	        options: {
		        configFile: 'karma.conf.js',
		        browsers: ['PhantomJS']
	        },
	        once: {
		        port: 8989,
		        runnerPort: 8988,
		        autoWatch: false,
		        singleRun: true
	        },
	        watch: {
		        port: 8987,
		        runnerPort: 8986,
		        autoWatch: true,
		        singleRun: false
	        }
        },

	    clean: ['dist/'],

	    copy: {
			main: {
				files: [
					{expand: true, src: ['data/*'], dest: dist},
					{expand: true, src: ['src/*'], dest: dist},
					{expand: true, src: ['test/*'], dest: dist},
					{expand: true, src: ['vendor/*'], dest: dist},

					{expand: true, src: ['*.js'], dest: dist},
					{expand: true, src: ['*.json'], dest: dist},
					{expand: true, src: ['*.md'], dest: dist},
					{expand: true, src: ['LICENSE'], dest: dist}
				]
			}
	    },

	    processAnnotations: {
		    main: {
			    files: [dist + '/src/*']
		    }
	    },

	    zip: {
		    main: {
			    cwd: 'dist/',
			    src: dist + '/**/*',
			    dest: dist + '.zip'
		    }
	    }
    });

	grunt.loadNpmTasks('grunt-karma');

	// dev tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-zip');

	grunt.registerTask('processAnnotations', function() {
		var target = arguments[0] || 'main';
		var conf = [this.name, target].join('.');
		var re = /^'([^']+)';$/;

		grunt.config.requires(conf, [conf, 'files'].join('.'));

		conf = grunt.config.get(conf);

		conf.files.forEach(function(fileDesc) {
			var files = grunt.file.expand(fileDesc);

			files.forEach(function(file) {
				var contents = grunt.file.read(file);
				// if file starts with single quote, get first line
				if (contents.indexOf("'") === 0) {
					var firstLine = contents.split('\n').shift();
					var replacement = re.test(firstLine) ? re.exec(firstLine).pop() : '';

					if (replacement && replacement != 'use strict') {
						grunt.file.write(file, replacement);
					}
				}
			});
		});
	});

    grunt.registerTask('default', ['karma:once']);

	grunt.registerTask('package', ['clean', 'copy', 'processAnnotations', 'zip']);
};
