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

    Header.$inject = ['$state'];

    function Header($state) {
        var headerVm = this;
        headerVm.goToPage = goToPage;

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
                    $state.go('header.tasks')
            }
        }
    }
})();