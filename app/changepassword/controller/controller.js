(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('ChangePasswordController', ChangePassword);

    ChangePassword.$inject = ['$state', '$filter', 'config', '$http'];

    function ChangePassword($state, $filter, config, $http) {
        var changepasswordVm = this;
        // Variable declarations
        changepasswordVm.currentUser = {};
        changepasswordVm.currentpassword = "";
        changepasswordVm.newpassword = "";
        changepasswordVm.confirmpassword = "";

        changepasswordVm.changePassword = changePassword;


        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function changePassword() {
            if (changepasswordVm.currentUser.currentpassword && changepasswordVm.currentUser.currentpassword.length > 0) {
                if (changepasswordVm.currentUser.newpassword && changepasswordVm.currentUser.newpassword.length > 0) {
                    if (changepasswordVm.currentUser.newpassword == changepasswordVm.currentUser.confirmpassword) {
                        $http({
                            method: "POST",
                            url: config.API_URL.changePassword,
                            data: {
                                userId: config.userDetails.userId,
                                currentpassword: changepasswordVm.currentUser.currentpassword,
                                newpassword: changepasswordVm.currentUser.newpassword
                            }
                        }).then(function mySucces(response) {
                            console.log(response.data);
                            var api_result = response.data.result;
                            if (api_result) {
                                alert(response.data.description);
                                $state.go('header.home');
                            } else {
                                alert(response.data.description);
                            }
                        }, function myError(response) {
                            console.log(response.statusText);
                        });
                    } else {
                        alert("please enter same password");
                    }
                } else {
                    alert("Please enter new password");
                }
            } else {
                alert("Please enter current password");
            }
        }

    }

})();