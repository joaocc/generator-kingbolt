/// <reference path="../_App.ts" />
module <%= safePath %> {
    export interface I<%= safeName %>Scope {
    }

    export class <%= safeName %> implements I<%= safeName %>Scope {

		//fooService: <%= safePath %>.IFOOService;

        //static $inject = ['<%= safePath %>.FOOService'];
        //constructor(fooService: <%= safePath %>.IFOOService) {
		//}

		constructor() {
            var vm = <I<%= safeName %>Scope>this;
        }
    }


	app.module.register.controller('<%= safePath %>.<%= safeName %>',
									             <%= safeName %>);
}
