app.controller('addCtrl', function(firebaseFactory, $scope) {

  $scope.addTrack = function () {

    firebaseFactory.postTrack($scope.trackTitle, $scope.trackArtist, $scope.trackAlbum)
      .then(() => { // reset form
        $scope.trackTitle = '';
        $scope.trackArtist = '';
        $scope.trackAlbum = '';
      })
      .then(() => {
        redirectTo: ('/main')
      })
  }

})
