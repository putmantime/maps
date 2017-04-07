angular
    .module('regionForm')
    .component('regionForm', {
        controller: function ($routeParams, $location) {
            var ctrl = this;
            console.log(ctrl.regions);
            ctrl.onSelect = function ($item) {
                if ($routeParams.bird){
                   $location.path('/region/' + $item.Code + '/species/' + $routeParams.bird);
                }
                else {
                    $location.path('/region/' + $item.Code );
                }
            };
        },
        templateUrl: '/maps/templates/region-form.html',
        bindings: {
            regions: '<'
        }
    });
