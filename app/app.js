const app = angular.module('musicHistory', ['ngRoute'])

app
  .config(($routeProvider) => {
    routeProvider
      .when('/', {
        controller: 'loginCtrl',
        templateUrl: '/app/partials/login.html',
        resolve: ,
      })
      .when('/register', {
        controller: 'registerCtrl',
        templateUrl: '/app/partials/register.html',
        resolve: ,
      })
      .when('/main', {
        controller: 'mainCtrl',
        templateUrl: '/app/partials/main.html',
        resolve: ,
      })
      .when('/add', {
        controller: 'addCtrl',
        templateUrl: '/app/partials/add.html',
        resolve: ,
      })
      .otherwise({
        redirectTo: ('/')
      })
  })
  .directive('playlist', function () {
    return {
      restrict: 'E',
      templateUrl: "app/partials/playlist.html"
    }
  })
