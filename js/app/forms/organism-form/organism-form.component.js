angular
    .module('organismForm')
    .component('organismForm', {
        controller: function ($routeParams, $location) {
            var ctrl = this;
            console.log($routeParams);
            ctrl.onSelect = function ($item) {
                console.log($item);
                console.log($location.path());
                   $location.path('/region/' + $routeParams.state + '/species/' + $item.sciName);

            };
        },
        templateUrl: '/maps/templates/organism-form.html',
        bindings: {
            orgs: '<'
        }
    });
