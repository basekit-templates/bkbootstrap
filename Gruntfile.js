module.exports = function(grunt) {
  function recruseImports (filename) {
  	var str = grunt.file.read(filename),
  		filecontents = '',
  		imports = /@import\W+?[\"\'](.*?)[\"\']\;/ig,
  		matches = str.match(imports);

  	if(matches !== null && matches.length > 0) {
		for (var i = 0; i < matches.length; i++) {
			swapOutString = matches[i];
			filecontents = recruseImports(swapOutString.replace(imports, "$1"));
			str = str.replace(matches[i], filecontents);
			filecontents = '';
		}
	}
	return str;
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    lesslint:{
     src: ['bkb-dev.less']
    },
    csslint: {
      options:{
        csslintrc: 'config/.csslintrc'
      }
     }
  });

  grunt.loadNpmTasks('grunt-lesslint')

  // Default task(s).
  grunt.registerTask('build', function () {
  	var buildStr = recruseImports('basekit-bootstrap.less'),
        vars = grunt.file.read('vars.less');

    // This is the version that gets linted; includes
    // all the vars so linting doesn't fall over
    grunt.file.write('bkb-dev.less', vars+buildStr);

    // This is the production version of bkb. The
    // one that will get released with BaseKit
    grunt.file.write('bkb.less', buildStr);
        grunt.task.run('lesslint');
  });
};

