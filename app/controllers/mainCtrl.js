app.controller('mainCtrl', function(firebaseFactory) {

  firebaseFactory
    .getTracks()
    .then((data) => {
      console.log(data)
    })
})
