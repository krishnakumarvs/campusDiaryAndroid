(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('EditprofileController', Editprofile);

    Editprofile.$inject = ['$state', '$filter'];

    function Editprofile($state, $filter) {
        var editprofileVm = this;
        // Variable declarations
        editprofileVm.currentUser = {};
        editprofileVm.currentUser.email = "";
        editprofileVm.currentUser.password = "";

        // Function declarations
        editprofileVm.authinticateUser = authinticateUser;
        editprofileVm.SignUp = SignUp;

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