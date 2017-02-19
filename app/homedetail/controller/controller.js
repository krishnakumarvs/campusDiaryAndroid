(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Task Page Controller.
         */
        .controller('HomeDetailController', HomeDetail);

    HomeDetail.$inject = ['$state', 'config'];

    function HomeDetail($state, config) {
        var homeDetailVm = this;
        homeDetailVm.GotoViewTask = GotoViewTask;
        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                if (config.userDetails.photo) {
                    homeDetailVm.userImage = config.API_URL.serverUrl + config.userDetails.photo;
                    console.log("homeDetailVm.userImage" + homeDetailVm.userImage);
                }
            }
            homeDetailVm.userDetails = config.userDetails;
            var joiningYear = new Date(parseFloat(config.userDetails.admissionDateMilli));
            homeDetailVm.userDetails.year = joiningYear.getFullYear();

        }

        function GotoViewTask() {

        }
    }
})();