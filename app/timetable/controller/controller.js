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

    Timetable.$inject = ['$state', '$filter'];

    function Timetable($state, $filter) {

        var timetableVm = this;
        // Variable declarations
        timetableVm.currentUser = {};
        timetableVm.currentUser.email = "";
        timetableVm.currentUser.password = "";

        timetableVm.clicked = clicked;

        // Function declarations
        timetableVm.authinticateUser = authinticateUser;
        timetableVm.SignUp = SignUp;

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