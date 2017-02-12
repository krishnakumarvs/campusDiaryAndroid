(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Task Page Controller.
     */
    .controller('HomePageController', Home);

    Home.$inject = ['$state'];

    function Home($state) {
        var tasksVm = this;
        tasksVm.GotoViewTask = GotoViewTask;
        activate();

        function activate() {

        }

        function GotoViewTask () {
            
        }
    }
})();