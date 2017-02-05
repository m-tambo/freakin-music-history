const app = angular.module('musicHistory', ['ngRoute'])

app
  .config(($routeProvider) => {

    firebase.initializeApp({
      apiKey: "AIzaSyCjrdUL9bsCPn4ZB0OdeUFS6VQ8rttha94",
      authDomain: "freakin-music-history.firebaseapp.com",
      databaseURL: "https://freakin-music-history.firebaseio.com",
      storageBucket: "freakin-music-history.appspot.com",
      messagingSenderId: "304341451987"
    });

    $routeProvider
      .when('/', {
        controller: 'loginCtrl',
        templateUrl: '/app/partials/login.html'
        // resolve:
      })
      .when('/register', {
        controller: 'registerCtrl',
        templateUrl: '/app/partials/register.html'
        // resolve:
      })
      .when('/main', {
        controller: 'mainCtrl',
        templateUrl: '/app/partials/main.html'
        // resolve:
      })
      .when('/add', {
        controller: 'addCtrl',
        templateUrl: '/app/partials/add.html'
        // resolve:
      })
      .otherwise({
        redirectTo: ('/')
      })
  })
