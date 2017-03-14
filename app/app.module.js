var appName = "Kakes";
// Ionic Starter App


angular.module(appName, ['ionic'])

.run(function($ionicPlatform, $rootScope, $state) {
    $rootScope.$state = $state;

    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeStart', function(e, curr, prev) {

        $rootScope.pageTitle = curr.title;
    });

    $rootScope.$on('$stateChangeSuccess', function(e, curr, prev) {
        $rootScope.currentState = $state.current;

    });
})

.config(function($stateProvider, $urlRouterProvider) {
    //fallback language if entry is not found in current language
    /*$translateProvider.fallbackLanguage('es');*/
    //load language entries from files
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js


    $stateProvider

    // setup an abstract state for the tabs directive


    .state('login', {
        url: "/login",
        templateUrl: "app/login/templates/login.html",
        controller: 'LoginController as Login',
        title: 'Login'
    })

    .state('forgotpassword', {
        url: "/forgotpassword",
        templateUrl: "app/login/templates/forgotpassword.html",
        controller: 'ForgotPasswordController as ForgotPassword',
        title: 'Login'
    })

    .state('header', {
        url: "/",
        templateUrl: "app/shared/templates/header.html",
        controller: 'HeaderController as Header',
        title: 'Header'
    })

    .state('timetable', {
        url: "/timetable",
         title: 'TimeTable',
         templateUrl: "app/timetable/templates/timetable.html",
         controller: 'TimetableController as Timetable'
    })

    .state('homedetail', {
        url: "/homedetail",
         title: 'Profile',
         templateUrl: "app/homedetail/templates/homedetail.html",
         controller: 'HomeDetailController as HomeDetail'
    })

    .state('sylabus', {
        url: "/sylabus",
         title: 'Syllabus',
         templateUrl: "app/sylabus/templates/sylabus.html",
         controller: 'SylabusController as Sylabus'
    })

    .state('seriestimetable', {
        url: "/seriestimetable",
         title: 'SeriesTimeTable',
         templateUrl: "app/seriestimetable/templates/seriestimetable.html",
         controller: 'SeriesTimetableController as Series'
    })

    .state('editprofile', {
        url: "/editprofile",
         title: 'EDIT PROFILE',
         templateUrl: "app/editprofile/templates/editprofile.html",
         controller: 'EditprofileController as Editprofile'
    })


    .state('changepassword', {
        url: "/changepassword",
         title: 'CHANGE PASSWORD',
         templateUrl: "app/changepassword/templates/changepassword.html",
         controller: 'ChangePasswordController as ChangePassword'
    })
    
    .state('feedback', {
        url: "/feedback",
         title: 'FeedBack',
         templateUrl: "app/feedback/templates/feedback.html",
         controller: 'FeedbackController as Feedback'
    })

    .state('unionpost', {
        url: "/unionpost",
         title: 'UnionPost',
         templateUrl: "app/unionpost/templates/unionpost.html",
         controller: 'UnionPostController as UnionPost'
    })

     .state('mypost', {
        url: "/mypost",
         title: 'MyPost',
         templateUrl: "app/mypost/templates/mypost.html",
         controller: 'MyPostController as MyPost'
         
    })

    .state('notifications', {
        url: "/notifications",
         title: 'News',
         templateUrl: "app/notifications/templates/notifications.html",
         controller: 'NotificationsController as News'
    })

    .state('home', {
        title: 'Home',
        url: "/home",
        templateUrl: "app/homePage/templates/homePage.html",
        controller: 'HomePageController as Home'
    })

    .state('settings', {
        url: "/settings",
        parent: 'header',
        showHeader: true,
        title: 'Settings',
        templateUrl: "app/settings/templates/settings.html",
        controller: 'SettingsController as Settings'

    });

    //mockResult

    /*.state('header.dashboard', {
        url: "dashboard",
        title: 'DashBoard',
        parent: 'header',
        showHeader: true,
        views: {
            'menuContent': {
                templateUrl: "app/templates/dashboard.html",
                controller: 'HomePageController as HomePage'
            }
        }
    })*/

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

});