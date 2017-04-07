function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
angular
    .module('worldMap')
    .component('worldMap', {
        templateUrl: '/putmantime/templates/world-map.html',
        //template: '<h1>hello world</h1>',
        controller: function ($filter, $routeParams, allSpecies, getAllSpeciesByRegion, getSpeciesByRegion, regionCodes) {
            //var ctrl = this;
            //ctrl.speciesList = [];
            //ctrl.regionsList = '';
            //ctrl.params = $routeParams;
            //ctrl.allTheBirds = [];
            //if (ctrl.params.bird) {
            //    var allSpeciesList = allSpecies.getAllSpecies();
            //    allSpeciesList.$promise.then(function (data) {
            //        ctrl.currentBird = $filter('getJsonItem')('sciName', ctrl.params.bird, data)
            //    });
            //
            //}
            //if (ctrl.params.state) {
            //    var regiondata = regionCodes.getRegions();
            //    regiondata.$promise.then(function (data) {
            //        ctrl.regionsList = data;
            //        ctrl.state = $filter('getJsonItem')('Code', ctrl.params.state, data);
            //        var mymap = L.map('mapid').setView([ctrl.state.Latitude, ctrl.state.Longitude], 6);
            //        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            //            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            //            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            //            maxZoom: 18,
            //            id: 'mapbox.streets',
            //            accessToken: 'pk.eyJ1IjoidGltZXB1dCIsImEiOiJjaXprZGprcGMwM3VjMzNsYms0ZTBsYWg0In0.l4hApNQswBDhwmp2-UaWGA'
            //        }).addTo(mymap);
            //
            //        getSpeciesByRegion.getSpeciesByRegion(ctrl.params.state, ctrl.params.bird).then(function (data) {
            //            console.log(data);
            //            ctrl.sightings = data.length;
            //            angular.forEach(data, function (value) {
            //                var marker = L.circle([value.lat, value.lng], {
            //                    color: value.color,
            //                    fillColor: 'red',
            //                    fillOpacity: 0.8,
            //                    radius: 2000
            //                }).addTo(mymap);
            //                marker.bindPopup(
            //                    "<h6><strong>Common Name: " + value.comName + "</strong></h6>" +
            //                    "<h6>Scientific Name: <i>" + value.sciName + "</i></h6>" +
            //                    "<h6>Location: " + value.locName + "</h6>" +
            //                    "<h6>Number: " + value.howMany + "</h6>" +
            //                    "<h6>Date/Time: " + value.obsDt + "</h6>" +
            //                    "<span>Lat: " + value.lat + " Long: " + value.lng + "</span>"
            //                );
            //            });
            //
            //        });
            //    });
            //    getAllSpeciesByRegion.getAllSpeciesByRegion(ctrl.params.state).then(function (data) {
            //        ctrl.speciesList = data;
            //    });
            //
            //
            //}


        }
    });