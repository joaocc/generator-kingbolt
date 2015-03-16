/// <reference path="../../app/App.ts" />

/*jslint white: true, node:true, nomen:true */
/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject */
/*global openDatabase */
'use strict';

describe("controller: <%= safeName %>", function() {

	beforeEach(module('app'));

	var controllerToTestScope: <%= safePath %>.I<%= safeName %>Scope;

	beforeEach(inject(<any>['$controller',function($controller)	   {
		controllerToTestScope = $controller('<%= safePath %>.<%= safeName %>');
	}]));

	it('should be registered', function() {
		expect(controllerToTestScope).toBeTruthy();
	});

});
