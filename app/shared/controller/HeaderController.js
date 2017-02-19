(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Header Controller.
         */
        .controller('HeaderController', Header);

    Header.$inject = ['$state', 'config'];

    function Header($state, config) {
        var headerVm = this;
        headerVm.goToPage = goToPage;
        headerVm.showUnionLink = false;

        activate();

        function activate() {
            headerVm.userDetails = config.userDetails;
            console.log("loading header.....");
            if (headerVm.userDetails && headerVm.userDetails.union_member && headerVm.userDetails.union_member == "true") {
                headerVm.showUnionLink = true;
            }


        }

        function goToPage(pageNo) {
            switch (pageNo) {
                case 1:
                    $state.go('header.home')
                    break;
                case 2:
                    $state.go('header.editprofile')
                    break;

                case 3:
                    $state.go('header.timetable')
                    break;
                case 4:
                    $state.go('header.seriestimetable')
                    break;
                case 5:
                    $state.go('header.sylabus')
                    break;
                case 6:
                    $state.go('header.notifications')
                    break;
                case 7:
                    $state.go('header.feedback')
                    break;
                default:
                    $state.go('login');
            }
        }
    }
})();