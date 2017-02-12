(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('SylabusController', Login);

    Login.$inject = ['$state', '$filter'];

    function Login($state, $filter) {

        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = "";
        loginVm.currentUser.password = "";

        loginVm.clicked = clicked;

        // Function declarations
        loginVm.authinticateUser = authinticateUser;
        loginVm.SignUp = SignUp;

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