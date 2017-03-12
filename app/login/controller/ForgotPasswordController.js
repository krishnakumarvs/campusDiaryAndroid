(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * ForgotPassword Controller.
         */
        .controller('ForgotPasswordController', ForgotPassword);

    ForgotPassword.$inject = ['$state', '$filter', '$http', 'config'];

    function ForgotPassword($state, $filter, $http, config) {

        var forgotPasswordVm = this;
        // Variable declarations
        forgotPasswordVm.currentUser = {};
        forgotPasswordVm.currentUser.email = ""; //krishjh_mea@yahoo.imn

        // Function declarations
        forgotPasswordVm.resetPassword = resetPassword;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }

        function resetPassword() {
            console.log(forgotPasswordVm.currentUser);
            $http({
                method: "POST",
                url: config.API_URL.resetPassword,
                data: {
                    email: forgotPasswordVm.currentUser.email,
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                var api_result = response.data.result;
                if (api_result) {
                    alert(response.data.description);
                    $state.go('login');
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
                alert("Could not connect with server");
            });

            //$state.go('header.home');
        }

    }

})();