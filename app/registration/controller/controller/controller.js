(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Registration Controller.
     */
    .controller('RegistrationController', Registration);

    Registration.$inject = ['$state', '$filter', 'config'];

    function Registration($state, $filter, config) {
        var registrationVm = this;
        registrationVm.confirmPassword = confirmPassword;
        registrationVm.addNewUser = addNewUser;
        registrationVm.newUser = {};

        registrationVm.newUser.email = "";
        registrationVm.newUser.password = "";
        var confirmPassword = "";

        function addNewUser() {
            console.log("Register button clicked");
        }
    }

})();