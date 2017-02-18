(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('FeedbackController', Feedback);

    Feedback.$inject = ['$state', '$filter', 'config', '$http'];

    function Feedback($state, $filter, config, $http) {
        var feedbackVm = this;
        // Variable declarations
        feedbackVm.feedbackMessage = "";
        feedbackVm.sendFeedback = sendFeedback;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function sendFeedback() {
            $http({
                method: "POST",
                url: config.API_URL.sendFeedback,
                data: {
                    semester: config.userDetails.semester,
                    branch: config.userDetails.branch,
                    college_id: config.userDetails.college_id,
                    userId: config.userDetails.userId,
                    feedbackMessage: feedbackVm.feedbackMessage
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                feedbackVm.feedbackMessage = "";
                var api_result = response.data.result;
                if (api_result) {
                    alert("Feedback posted successfully");
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }

})();