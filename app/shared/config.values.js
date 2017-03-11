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
        fileUpload: prefix + "upload",
        getMyNews: prefix + "getMyNews",
        deletePost:prefix + "deletePost",
        changePassword:prefix + "changePassword"
    };

    function recalculateUrls(prefix) {
        console.log(API_URL);
        console.log(prefix);
        API_URL = {
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
        }
        console.log(API_URL);
        config.API_URL = API_URL;
    }

    var userDetails = {};

    var config = {
        API_URL: API_URL,
        userDetails: userDetails,
        prefix: prefix,
        recalculateUrls: recalculateUrls
    };

    angular.module(appName).value('config', config);
})()