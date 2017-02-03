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
      postTrack : (tit, art, alb) => {
        console.log('posting to firebase')

        let newTrack = {};
        newTrack.title = tit;
        newTrack.artist = art;
        newTrack.album = alb;

        console.log(newTrack)

        return $http
          .post('https://freakin-music-history.firebaseio.com/.json', newTrack)
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
