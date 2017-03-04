(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('MyPostController', MyPost);

    MyPost.$inject = ['$state', '$filter', 'config', '$http'];

    function MyPost($state, $filter, config, $http) {
        var newsVm = this;

        newsVm.serverUrl = config.API_URL.serverUrl;
        activate();
        newsVm.deletePost=deletePost;

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

        function deletePost(){
            console.log("close");
        }
    }

})();