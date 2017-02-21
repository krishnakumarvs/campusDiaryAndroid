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
        var pic = "";

        var backendUrl = config.API_URL.fileUpload;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function getFileExtension(filename) {
            var ext = /^.+\.([^.]+)$/.exec(filename);
            return ext == null ? "" : ext[1];
        }

        function sendpostMessage() {
            if (document.getElementById('fileupload').files[0]) {
                pic = new Date().getTime() + "." + getFileExtension(document.getElementById('fileupload').files[0].name);
                uploadImage();
            }

            $http({
                method: "POST",
                url: config.API_URL.sendUnionPost,
                data: {
                    title: unionpostVm.postTitle,
                    postMessage: unionpostVm.postMessage,
                    audience: (unionpostVm.postAudience == "All") ? "All" : config.userDetails.college_id,
                    owner_id: config.userDetails.userId,
                    pic: pic
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                unionpostVm.postTitle = "";
                unionpostVm.postMessage = "";
                var api_result = response.data.result;
                if (api_result) {
                    alert("posted successfully");
                    $state.go('header.home');
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
            });
        }

        function uploadImage() {
            var fileToBeUploaded = document.getElementById('fileupload').files[0];
            var fd = new FormData();
            fd.append('upfile', fileToBeUploaded);
            $http.post(backendUrl + "?title=" + pic, fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            })

            .success(function(result) {
                console.log("Succesfully uploaded image");
            })

            .error(function(result) {
                console.log("Faliure");
            });
        }
    }

})();