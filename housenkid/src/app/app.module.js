/**
 * Created by Satish on 20-03-2016.
 */

(function(){
    'use strict';

    angular
        .module('housenkid',['ui.router','infinite-scroll'])
        .filter('html',htmlConverter)
        .config(moduleConfig);

    htmlConverter.$inject = ['$sce'];
    function htmlConverter($sce){
        return function(input) {
            return $sce.trustAsHtml(input);
        }
    }


    moduleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function moduleConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('');

        $stateProvider

            .state('home', {
                url: '',
                templateUrl: 'app/views/home.tmpl.html',
                controller: 'HomeController',
                controllerAs: 'homeVm'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'app/views/about.tmpl.html',
                controller:'AboutController',
                controllerAs: 'aboutVm'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'app/views/contact.tmpl.html',
                controller:'ContactController',
                controllerAs: 'contactVm'
            });
    }
})();