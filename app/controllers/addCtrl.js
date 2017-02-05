app.controller('addCtrl', function(firebaseFactory, $scope, $location) {

  $scope.addTrack = function () {
    if ($scope.trackTitle === undefined || $scope.trackArtist === undefined || $scope.trackAlbum === undefined) {
      alert('Enter valid Title, Artist and Album')
    }
    else {
    firebaseFactory.postTrack($scope.trackTitle, $scope.trackArtist, $scope.trackAlbum)
      .then(() => { // reset form
        $scope.trackTitle = '';
        $scope.trackArtist = '';
        $scope.trackAlbum = '';
      })
      .then(() => {
        $location.path('/main')
      })
    }
  }


})
