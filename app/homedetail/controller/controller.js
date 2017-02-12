(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Task Page Controller.
     */
    .controller('HomeDetailController', HomeDetail);

    HomeDetail.$inject = ['$state'];

    function HomeDetail($state) {
        var tasksVm = this;
        tasksVm.GotoViewTask = GotoViewTask;
        activate();

        function activate() {

        }

        function GotoViewTask () {
            
        }
    }
})();