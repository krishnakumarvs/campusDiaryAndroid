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

    Editprofile.$inject = ['$state', '$filter', 'config', '$http'];

    function Editprofile($state, $filter, config, $http) {
        var editprofileVm = this;
        // Variable declarations
        editprofileVm.currentUser = {};
        editprofileVm.editUserDetails = editUserDetails;


        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                editprofileVm.name = config.userDetails.name;
                editprofileVm.address = config.userDetails.address;
                editprofileVm.phone = config.userDetails.phone;
            }
        }

        function editUserDetails() {
            $http({
                method: "POST",
                url: config.API_URL.editUserDetails,
                data: {
                    userId: config.userDetails.userId,
                    name: editprofileVm.name,
                    address: editprofileVm.address,
                    phone: editprofileVm.phone
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
        }

    }

})();