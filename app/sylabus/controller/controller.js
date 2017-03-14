(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('SylabusController', Sylabus);

    Sylabus.$inject = ['$state', '$filter', '$http', 'config'];

    function Sylabus($state, $filter, $http, config) {

        var syllabusVm = this;
        syllabusVm.subject = ""; //Operating System
        syllabusVm.revision_code = ""; //4444
        syllabusVm.getSyllabus = getSyllabus;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function getSyllabus() {
            syllabusVm.syllabusDetails = "";
            $http({
                method: "POST",
                url: config.API_URL.getSyllabus,
                data: {
                    subject: syllabusVm.subject,
                    revision_code: syllabusVm.revision_code
                }
            }).then(function mySucces(response) {
                var api_result = response.data.result;
                if (api_result) {
                    syllabusVm.syllabusDetails = response.data.payload;
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response);
            });
        }
    }

})();