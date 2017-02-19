(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('SeriesTimetableController', Series);

    Series.$inject = ['$state', '$filter', '$http', 'config'];

    function Series($state, $filter, $http, config) {

        var seriesVm = this;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                console.log("Fetching time table results for student in " + config.userDetails.semester);
                $http({
                    method: "POST",
                    url: config.API_URL.getSeriesTimeTable,
                    data: {
                        semester: config.userDetails.semester,
                        branch: config.userDetails.branch,
                        college_id: config.userDetails.college_id,
                    }
                }).then(function mySucces(response) {
                    console.log(response.data);
                    var api_result = response.data.result;
                    if (api_result) {
                        if (api_result.length == 0) {
                            alert("Time table not announced");
                        } else {
                            seriesVm.timetables = response.data.payload;
                        }
                    } else {
                        alert(response.data.description);
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }
    }

})();