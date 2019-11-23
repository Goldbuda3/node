// //Wallpaper, Axios, and Download File
const wallpaper = require('wallpaper');

const axios = require('axios');
var download = require('download-file')
const fs = require('fs');

// (async() =>{
//     await wallpaper.set('hatpo.jpg');

//     await wallpaper.get();
// })();

// Make a request for a user with a given ID
axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then(function(response) {
    // handle success
    // console.log(response.data.message)
    download(response.data.message).then(data => {
      fs.writeFileSync("dog.jpg", data)
    })
  })
  .then(() => {
    wallpaper.set("dog.jpg")
    wallpaper.get()
  })
  .catch(function(error) {
    // handle error
    console.log(error)
  })
  .finally(function() {})