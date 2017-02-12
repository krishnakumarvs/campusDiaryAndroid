(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('LoginController', Login);

    Login.$inject = ['$state', '$filter','LoginDataService'];

    function Login($state, $filter, LoginDataService) {

        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = "";
        loginVm.currentUser.password = "";

        loginVm.clicked = clicked;

        // Function declarations
        loginVm.authinticateUser = authinticateUser;
        loginVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }

        function clicked() {
            alert(123);
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            console.log(loginVm.currentUser);

            LoginDataService.authinticateUser(loginVm.currentUser).then(function(res) {
                console.log(res);
                $state.go('header.home');
                /*if(res) {
                    if(res.result) {
                        alert(res.description);
                        $state.go('header.home');
                    } else {
                        alert(res.description);
                    }
                } else {
                    alert("server down");
                }*/
                
                /*if(res) {
                    $state.go('header.home');
                } else {
                    alert("Wrong");
                }*/
            });

            /*

            LoginDataService.authinticateUser(x,y).then(function(res){

            });
    
            */



            //$state.go('header.home');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();