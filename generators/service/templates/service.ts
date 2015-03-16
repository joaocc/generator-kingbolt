/// <reference path="../_App.ts" />
module <%= safePath %> {
    export interface I<%= safeName %> {
		action()
    }

    export class <%= safeName %> implements I<%= safeName %> {

       logger: common.Logger;

        static $inject = ['logger'];
        constructor(logger: common.Logger) {
			this.logger = logger;
        }

		action()
		{
			this.logger.info("action() was called");
		}
    }


	app.module.register.service('<%= safePath %>.<%= safeName %>',
									             <%= safeName %>);
}
