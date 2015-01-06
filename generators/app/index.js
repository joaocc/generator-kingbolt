'use strict';
var path = require('path');
var chalk = require('chalk');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  	// The name `constructor` is important here
  	constructor: function () {
    	// Calling the super constructor is important so our generator is correctly set up
    	generators.Base.apply(this, arguments);
		this.argument('appname', { type: String, required: false });
		this.appname = this.appname || path.basename(process.cwd());
		this.safeAppName = this._.camelize(this._.slugify(this._.humanize(this.appname)));
		this.title = this.appname;
    	// Next, add your custom code
    	//this.option('coffee'); // This method adds support for a `--coffee` flag
  	},
  	sayHello: function () {
		console.log('\nApplication name: '+this.appname+'  (you can set Application name: yo kingbolt YourAppName)');
		console.log('\n\nfor usage information type:');
		console.log('\n  yo kingbolt --help');
  	}
	,
	copyRootTemplates: function () {
		this.copy('gitignore.txt', '.gitignore');
		this.copy('index.html', 'index.html');
		this.copy('bower.json', 'bower.json');
		this.copy('gulpfile.js', 'gulpfile.js');
		this.copy('karma.conf.js', 'karma.conf.js');
		this.copy('package.json', 'package.json');
		this.copy('Readme.md', 'Readme.md');
		this.copy('tsd.json', 'tsd.json');
  	},
	copySrcTemplates: function () {
		this.copy('src/_App.ts', 'src/_App.ts');
		this.copy('src/App.module.ts', 'src/App.module.ts');
		this.copy('src/App.ts', 'src/App.ts');
  	},
	copySrcCommonTemplates: function () {
		this.copy('src/common/Logger.ts', 'src/common/Logger.ts');
  	},
	copySrcLayoutTemplates: function () {
		this.copy('src/layout/Shell.ts', 'src/layout/Shell.ts');
  	},
	copyTestTemplates: function () {
		this.copy('test/logger.spec.ts', 'test/logger.spec.ts');
		this.copy('test/shell.spec.ts', 'test/shell.spec.ts');
  	},
	finalMessage: function () {
		console.log('\n\nTo install all required 3rd party-files please type:'
		+ chalk.yellow.bold('\n  npm install')
		+ chalk.yellow.bold('\n  bower install')
		+ chalk.yellow.bold('\n  gulp install'));
		console.log('\nTo start developing type:'
		+ chalk.yellow.bold('\n  gulp\n\n'));
  	}
});
