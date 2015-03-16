/// <reference path="../../app/App.ts" />

/*jslint white: true, node:true, nomen:true */
/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject */
/*global openDatabase */
'use strict';

describe("service: <%= safeName %>", function() {

	beforeEach(module('app'));

	var serviceToTest: <%= safePath %>.I<%= safeName %>;

	beforeEach(inject(<any>['<%= safePath %>.<%= safeName %>',function(_serviceToTest_)	   {
		serviceToTest = _serviceToTest_;
	}]));

	it('should be registered', function() {
		expect(serviceToTest).toBeTruthy();
	});

	it('should have method action()', function() {
		expect(serviceToTest.action).toBeTruthy();
	});

});
