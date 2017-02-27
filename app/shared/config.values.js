(function() {

    var prefix = "http://localhost:4567/";
    var API_URL = {
        serverUrl: prefix,
        login: prefix + "login",
        notifications: prefix + "getNotifications",
        editUserDetails: prefix + "editUserDetails",
        getMainTimeTable: prefix + "getMainTimeTable",
        getSeriesTimeTable: prefix + "getSeriesTimeTable",
        sendFeedback: prefix + "sendFeedback",
        getSyllabus: prefix + "getSyllabus",
        sendUnionPost: prefix + "sendUnionPost",
        getNews: prefix + "getNews",
        fileUpload: prefix + "upload"
    };

    var userDetails = {};

    var config = {
        API_URL: API_URL,
        userDetails: userDetails
    };

    angular.module(appName).value('config', config);
})()