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
      addTrack : () => {
        return $http
          .post('https://freakin-music-history.firebaseio.com/.json')
      },
      deleteTrack : (track) => {
        return $http
          .delete(`https://freakin-music-history.firebaseio.com/${track}.json`)
      }

    }
  })
