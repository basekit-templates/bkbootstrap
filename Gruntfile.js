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
    pkg: grunt.file.readJSON('package.json')
  });

  // Default task(s).
  grunt.registerTask('files', function () { 	
  	var buildStr = recruseImports('basekit-bootstrap.less');
  	grunt.file.write('bkb.less', buildStr);
  });
};

