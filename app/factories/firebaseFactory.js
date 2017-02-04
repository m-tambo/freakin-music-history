app
  .factory('firebaseFactory', ($http) => {
    return {
    // get songs from fireBase
      getTracks : () => {
        return $http
          .get('https://freakin-music-history.firebaseio.com/.json')
          .then((res) => {
            return res;
            // console.log(res);
          })
          .then((obj) => {  // convert fireBase object to array
            const array =[];
            for (key in obj) {
              array.push(obj[key])
            }
            return array
          })
      },
      postTrack : (tit, art, alb) => {

        let newTrack = {};
        newTrack.title = tit;
        newTrack.artist = art;
        newTrack.album = alb;

        return $http
          .post('https://freakin-music-history.firebaseio.com/.json', newTrack)
          .then(() => {
            return newTrack
          })
      },
      deleteTrack : (track) => {
        return $http
          .delete(`https://freakin-music-history.firebaseio.com/${track}.json`)
      },
      // makeArray : (obj) => {
      //   let newArray = [];
      //   for (key in obj) {
      //     newArray.push(obj[key])
      //   }
      //   return newArray
      // }
    }
  })
