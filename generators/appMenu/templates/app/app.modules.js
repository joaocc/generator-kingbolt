    angular.module('app.core', ['ngMaterial', 'ngRoute']);
    angular.module('app.layout', []);

    //application-modules
    angular.module('app.feature1', []);

    angular.module('app', [
        'app.core',
        'app.layout',
        'app.feature1'
    ]);
