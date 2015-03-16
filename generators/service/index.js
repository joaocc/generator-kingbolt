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
		//this.safeName = this._.capitalize(this._.slugify(this._.humanize(this.appname)))+'Service';
		this.safeName = this._.capitalize(this.appname)+'Service';
		this.safePath = 'app.' + path.basename(process.cwd());
		this.testDirectory = 'test/' + path.basename(process.cwd());
    	// Next, add your custom code
    	//this.option('coffee'); // This method adds support for a `--coffee` flag
  	},
	sayHello: function () {
		console.log('generating a service: '+ this.safeName);
	},
	copyTemplates: function () {
		this.copy('service.ts', this.safeName+'.ts');
		this.copy('service.spec.ts', '../../'+this.testDirectory+'/'+this.safeName+'.spec.ts');
	}
});
