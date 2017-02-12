(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('FeedbackController', Feedback);

    Feedback.$inject = ['$state', '$filter'];

    function Feedback($state, $filter) {
        var feedbackVm = this;
        // Variable declarations
        feedbackVm.currentUser = {};
        feedbackVm.currentUser.email = "";
        feedbackVm.currentUser.password = "";

        // Function declarations
        feedbackVm.authinticateUser = authinticateUser;
        feedbackVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
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