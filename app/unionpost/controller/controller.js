(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('UnionPostController', UnionPost);

    UnionPost.$inject = ['$state', '$filter', 'config', '$http'];

    function UnionPost($state, $filter, config, $http) {
        var unionpostVm = this;
        // Variable declarations
        unionpostVm.postMessage = "";
        unionpostVm.postAudience = "All";
        unionpostVm.sendpostMessage = sendpostMessage;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function sendpostMessage() {

            $http({
                method: "POST",
                url: config.API_URL.sendUnionPost,
                data: {
                    title: unionpostVm.postTitle,
                    postMessage: unionpostVm.postMessage,
                    audience: (unionpostVm.postAudience == "All") ? "All" : config.userDetails.college_id,
                    owner_id: config.userDetails.userId
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                unionpostVm.postTitle = "";
                unionpostVm.postMessage = "";
                var api_result = response.data.result;
                if (api_result) {
                    alert("posted successfully");
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }

})();