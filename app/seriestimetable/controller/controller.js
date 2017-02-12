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

    Series.$inject = ['$state', '$filter'];

    function Series($state, $filter) {

        var seriesVm = this;
        // Variable declarations
        seriesVm.currentUser = {};
        seriesVm.currentUser.email = "";
        seriesVm.currentUser.password = "";

        seriesVm.clicked = clicked;

        // Function declarations
        seriesVm.authinticateUser = authinticateUser;
        seriesVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }

        function clicked() {
            alert(123);
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            $state.go('header.home');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();