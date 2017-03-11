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

    Notification.$inject = ['$state', '$filter', 'config', '$http'];

    function Notification($state, $filter, config, $http) {
        var newsVm = this;

        newsVm.serverUrl = config.API_URL.serverUrl;
        newsVm.savePost = savePost;
        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                $http({
                    method: "POST",
                    url: config.API_URL.getNews,
                    data: {
                        userId: config.userDetails.userId,
                        college_id: config.userDetails.college_id
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log("News fetching success");
                        console.log(response.data.payload);
                        newsVm.allNews = response.data.payload;
                    } else {
                        alert(response.data.description);
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }

        function savePost(pic) {
            if (pic) {
                var dowloadLink = newsVm.serverUrl + pic;
                console.log(dowloadLink);
                
            }else {
                alert("No image to download");
            }

        }
    }

})();