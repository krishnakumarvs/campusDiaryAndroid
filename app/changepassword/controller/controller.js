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
        changepasswordVm.currentpassword="";
        changepasswordVm.newpassword="";
        changepasswordVm.confirmpassword="";

        changepasswordVm.changePassword = changePassword;


        activate();

        function activate() {
            
        }

        function changePassword() {
            if(changepasswordVm.newpassword==changepasswordVm.confirmpassword){
                $http({
                method: "POST",
                url: config.API_URL.changePassword,
                data: {
                    userId: config.userDetails.userId,
                    currentpassword: changepasswordVm.currentpassword,
                    newpassword: changepasswordVm.newpassword
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                var api_result = response.data.result;
                if (api_result) {
                    alert(response.data.description);
                    config.userDetails = response.data.payload;
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
            });
            }else{
                alert("please enter same password");
            }
            
        }

    }

})();