angular
    .module('filters')
    .filter('getJsonItem', function () {
        return function (ikey, ivalue, ijson) {
            var curitem = '';
            angular.forEach(ijson, function (value, key) {
                if (value[ikey] == ivalue) {
                    curitem = value;
                }
                else {
                    return 'none'
                }
            });
            return curitem
        }
    });

