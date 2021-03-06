'use strict';

angular.module('coworkApp')
    .factory('Space', function ($resource, DateUtils) {
        return $resource('api/spaces/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.openHour = DateUtils.convertDateTimeFromServer(data.openHour);
                    data.closeHour = DateUtils.convertDateTimeFromServer(data.closeHour);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
