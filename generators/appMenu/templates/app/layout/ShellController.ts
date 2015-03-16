/// <reference path="../_App.ts" />
module app.layout {
    interface IShellScope {
        busyMessage: string;
        showSplash: boolean;
    }

    class ShellController implements IShellScope {
        busyMessage = "Please wait...";
        showSplash: boolean = true;

        static $inject = ['$mdSidenav'];
        constructor(private $mdSidenav: any) {
            var vm = this;
            //this.hideSplash();
        }

        /*
        hideSplash() {
            var vm = this;
            this.common.$timeout(() => {
                this.showSplash = false;
            }, 1000);
        }
        */

        toggleSidenav(id: string) {
            this.$mdSidenav(id).toggle();
        }

    }

    angular.module('app.layout')
       .controller('app.layout.ShellController', ShellController);
}

