app.controller('mainCtrl', function($scope, firebaseFactory) {

  firebaseFactory
    .getTracks()
    .then((res) => {
      console.log(res.data)
      $scope.allTracks = res.data
    })
})
