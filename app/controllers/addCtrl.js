app.controller('addCtrl', function(firebaseFactory, $scope) {

  $scope.addTrack = function () {
    console.log('fire addTrack function')
    firebaseFactory.postTrack(title, artist, album)
  }

})
