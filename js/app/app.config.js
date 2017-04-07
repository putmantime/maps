'use strict';

angular.module('mapApp')
    .config(
    function ($locationProvider,
              $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });
        $routeProvider.
            when("/", {
                //templateUrl: "/templates/world-map.html"
                template: "<world-map></world-map>"
            }).
            when("/region/:state", {
                //templateUrl: "/templates/world-map.html"
                template: "<world-map></world-map>"
            }).
            when("/region/:state/species/:bird", {
                //templateUrl: "/templates/world-map.html"
                template: "<world-map></world-map>"
            }).
            otherwise({
                template: "<h1>Requested Page Not Found</h1>"
            })

    });
