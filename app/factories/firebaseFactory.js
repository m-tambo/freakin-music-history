app
  .factory('firebaseFactory', ($http) => {
    return {
    // get songs from fireBase
      getSongs : () => {
        return $http
          .get('https://freakin-music-history.firebaseio.com/.json')
          .then((res) => {
            return res;
            console.log(res);
          })
      }

    }
  })
