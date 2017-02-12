(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('NotificationsController', Notification);

    Notification.$inject = ['$state', '$filter'];

    function Notification($state, $filter) {
        var notificationVm = this;
        // Variable declarations
        notificationVm.currentUser = {};
        notificationVm.currentUser.email = "";
        notificationVm.currentUser.password = "";

        // Function declarations
        notificationVm.authinticateUser = authinticateUser;
        notificationVm.SignUp = SignUp;

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