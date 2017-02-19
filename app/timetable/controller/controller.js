(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('TimetableController', Timetable);

    Timetable.$inject = ['$state', '$filter', '$http', 'config'];

    function Timetable($state, $filter, $http, config) {

        var timetableVm = this;
        // Variable declarations
        timetableVm.currentUser = {};

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                console.log("Fetching time table results for student in " + config.userDetails.semester);
                $http({
                    method: "POST",
                    url: config.API_URL.getMainTimeTable,
                    data: {
                        semester: config.userDetails.semester,
                        branch: config.userDetails.branch,
                    }
                }).then(function mySucces(response) {
                    console.log(response.data);
                    var api_result = response.data.result;
                    if (api_result) {
                        if (api_result.length == 0) {
                            alert("Time table not announced");
                        } else {
                            timetableVm.timetables = response.data.payload;
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