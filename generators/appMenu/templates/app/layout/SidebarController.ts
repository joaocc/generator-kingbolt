module app.layout {
    interface ISidebarScope {
        //busyMessage: string;
    }

    class SidebarController implements ISidebarScope {
        static $inject = ['$route', '$rootScope'];
        constructor(private $route: ng.route.IRouteService, private $rootScope: any) {
            var vm = this;
            //this.getNavRoutes();
        }

        /*
        getNavRoutes() {
            for (var route in this.$route.routes) {
                console.log('route: ', route);
            }
        }
        */

        isSelected(routeTitle: string) {
            //var isSel = $rootScope.title = ''
            //var x = this.$route.current;
            //var r = this.$route.current;

            var x = this.$rootScope.title == routeTitle;

            return x;
        }

    }

    angular.module('app.layout')
        .controller('app.layout.SidebarController', SidebarController);
}
