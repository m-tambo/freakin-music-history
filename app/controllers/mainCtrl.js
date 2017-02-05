app.controller('mainCtrl', function($scope, firebaseFactory) {

  firebaseFactory
    .getTracks()
    .then((res) => {
      console.log(res)
      $scope.allTracks = res;
      $scope.allArtists = [];
      $scope.allAlbums = [];

      for (key in res) {
        $scope.allArtists.push(res[key].artist)
      }
      for (key in res) {
        $scope.allAlbums.push(res[key].album)
      }
        console.log($scope.allArtists)
        console.log($scope.allAlbums)

    })


  // $scope.quantity = 2;


})
