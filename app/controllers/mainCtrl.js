app.controller('mainCtrl', function($scope, firebaseFactory) {

  firebaseFactory
    .getTracks()
    .then((res) => {
      console.log(res)
      $scope.allTracks = res;

      // an array of all the artists
      $scope.allArtists = [];
      for (key in res) {
        $scope.allArtists.push(res[key].artist)
      }
      // an array of all the albums
      $scope.allAlbums = [];
      for (key in res) {
        $scope.allAlbums.push(res[key].album)
      }

    })


  // $scope.quantity = 2;


})
