(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Task Page Controller.
         */
        .controller('HomePageController', Home);

    Home.$inject = ['$state', 'config', '$http'];

    function Home($state, config, $http) {
        var homeVm = this;
        homeVm.GotoViewTask = GotoViewTask;
        homeVm.userImage = "";
        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                if (config.userDetails.photo) {
                    homeVm.userImage = config.API_URL.serverUrl + config.userDetails.photo;
                    console.log(homeVm.userImage);
                }
                $http({
                    method: "POST",
                    url: config.API_URL.notifications,
                    data: {
                        userId: config.userDetails.userId
                    }
                }).then(function mySucces(response) {
                    /*console.log(response.data);*/
                    var api_result = response.data.result;
                    if (api_result) {
                        /*console.log("Notifications fetching success");
                        console.log(response.data.payload);*/
                        homeVm.notifications = response.data.payload;
                    } else {
                        alert(response.data.description);
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });

                // check for series exam time table
                $http({
                    method: "POST",
                    url: config.API_URL.getNextSeriesExamDate,
                    data: {
                        semester: config.userDetails.semester,
                        branch: config.userDetails.branch,
                        college_id: config.userDetails.college_id,
                    }
                }).then(function mySucces(response) {
                    console.log(response.data);
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log("Have series exam in near days");
                        homeVm.nextSeriesExam = response.data.payload;
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });

                // check for university exam time table
                $http({
                    method: "POST",
                    url: config.API_URL.getNextUniversityExamDate,
                    data: {
                        semester: config.userDetails.semester,
                        branch: config.userDetails.branch,
                        college_id: config.userDetails.college_id
                    }
                }).then(function mySucces(response) {
                    console.log(response.data);
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log("Have university exam in near days");
                        homeVm.nextUniversityExam = response.data.payload;
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }

        }

        function GotoViewTask() {

        }
    }
})();