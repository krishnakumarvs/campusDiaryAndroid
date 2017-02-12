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

     LoginPersistenceDataService.$inject = ['$q'];

     function LoginPersistenceDataService($q) {
         var loginPersistenceDataService = {
            authinticateUser: authinticateUser
         };

         function authinticateUser () {
             var defer = $q.defer();
             alert(22)
             defer.resolve("heloo");
             return defer.promise;
         }

         return loginPersistenceDataService;
     }
 })();