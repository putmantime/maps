angular
    .module('ajaxResources')
    .factory('getSpeciesByRegion', function () {
        var getSpeciesByRegion = function (region, species) {
            return $.ajax({
                url: "http://ebird.org/ws1.1/data/obs/region_spp/recent",
                jsonp: "callback",
                dataType: 'jsonp',
                data: {
                    rtype: "subnational1",
                    r: region,
                    fmt: "json",
                    sci: species
                },
                xhrFields: {withCredentials: true},
                success: function (response) {
                    return response
                },
                error: function (response) {
                    return response
                }
            });
        };
        return {
            getSpeciesByRegion: getSpeciesByRegion

        }
    });

angular
    .module('ajaxResources')
    .factory('getAllSpeciesByRegion', function () {
        var getAllSpeciesByRegion = function (region) {
            return $.ajax({
                url: "http://ebird.org/ws1.1/data/obs/region/recent",
                jsonp: "callback",
                dataType: 'jsonp',


                data: {
                    rtype: "subnational1",
                    r: region,
                    fmt: "json"
                },
                xhrFields: {withCredentials: true},
                success: function (response) {
                    return response
                },
                error: function (response) {
                    return response
                }
            });
        };
        return {
            getAllSpeciesByRegion: getAllSpeciesByRegion

        }
    });


angular
    .module('ajaxResources')
    .factory('regionCodes', function ($resource) {
        var url = '/json/regions.json';
        return $resource(url, {}, {
            getRegions: {
                method: "GET",
                params: {
                },
                isArray: true,
                cache: true
            }
        });
    });

angular
    .module('ajaxResources')
    .factory('allSpecies', function ($resource) {
        var url = '/json/allSpecies.json';
        return $resource(url, {}, {
            getAllSpecies: {
                method: "GET",
                params: {
                },
                isArray: true,
                cache: true
            }
        });
    });