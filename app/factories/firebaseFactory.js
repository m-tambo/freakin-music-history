app
  .factory('firebaseFactory', ($http) => {
    return {
    // get songs from fireBase
      getTracks : () => {
        return $http
          .get('https://freakin-music-history.firebaseio.com/.json')
          .then((res) => {
            return res;
            console.log(res);
          })
      },
      postTrack : () => {

        const newTrack = {}
        newTrack.name = "name",
        newTtrack.artist = "artist",
        newTrack.album = "album"

        return $http
          .post('https://freakin-music-history.firebaseio.com/.json', 'newTrack')
          .then(() => {
            console.log(newTrack)
            return newTrack
          })
      },
      deleteTrack : (track) => {
        return $http
          .delete(`https://freakin-music-history.firebaseio.com/${track}.json`)
      }

    }
  })
