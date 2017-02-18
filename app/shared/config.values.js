(function() {

    var prefix = "http://localhost:4567/";
    var API_URL = {
        login: prefix + "login",
        notifications: prefix + "getNotifications",
        editUserDetails: prefix + "editUserDetails",
    };

    var userDetails = {};

    var config = {
        API_URL: API_URL,
        userDetails: userDetails
    };

    angular.module(appName).value('config', config);
})()