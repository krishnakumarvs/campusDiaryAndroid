 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('LoginDataService', LoginDataService)

     .factory('LoginClientDataService', LoginClientDataService)

     .factory('LoginPersistenceDataService', LoginPersistenceDataService);

     LoginDataService.$inject = ['LoginPersistenceDataService'];
    
     function LoginDataService(LoginPersistenceDataService) {
         var loginDataService = {
            authinticateUser: authinticateUser
         };

         function authinticateUser (userDetails) {
             return LoginPersistenceDataService.authinticateUser();
         }

         console.log(loginDataService);

        return loginDataService;
     }

     LoginClientDataService.$inject = ['$q', 'config'];

     function LoginClientDataService($q, config) {
         var loginClientDataService = {

         };
         return loginClientDataService;
     }

     LoginPersistenceDataService.$inject = ['$q','$http'];

     function LoginPersistenceDataService($q, $http) {
         var loginPersistenceDataService = {
            authinticateUser: authinticateUser
         };

         function authinticateUser (userDetails) {
             var defer = $q.defer();
             

            // call http://www.json-generator.com/api/json/get/bKnOygLMFu?indent=2 
            
            $http({
                    method : "GET",
                    url : "http://www.json-generator.com/api/json/get/cbkIQMNBNK?indent=2"
                }).then(function mySucces(response) {
                    defer.resolve(response.data);
                }, function myError(response) {
                    defer.resolve(false);
                });


             //defer.resolve(result);


             return defer.promise;
         }

         return loginPersistenceDataService;
     }
 })();