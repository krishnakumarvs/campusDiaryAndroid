(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('LoginController', Login);

    Login.$inject = ['$state', '$filter', '$http', 'config'];

    function Login($state, $filter, $http, config) {

        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = ""; //krishjh_mea@yahoo.imn
        loginVm.currentUser.password = ""; //722017

        loginVm.clicked = clicked;
        loginVm.changeServerIp = changeServerIp;

        // Function declarations
        loginVm.authinticateUser = authinticateUser;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }

        function clicked() {
            alert(123);
        }

        function changeServerIp() {
            var newPrefix = window.prompt("Enter server url", config.prefix);
            if (newPrefix) {
                config.prefix = newPrefix;
                config.recalculateUrls(newPrefix);
                console.log(newPrefix);
                console.log(config.prefix);
            }
        }

        function authinticateUser() {
            console.log("Clicked on authenticate user " + config.API_URL.login);
            console.log(loginVm.currentUser);
            $http({
                method: "POST",
                url: config.API_URL.login,
                data: {
                    username: loginVm.currentUser.email,
                    password: loginVm.currentUser.password
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                var api_result = response.data.result;
                if (api_result) {
                    console.log("Authentication success");
                    $state.go('home');
                    config.userDetails = response.data.payload;
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