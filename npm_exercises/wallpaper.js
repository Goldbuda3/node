//Wallpaper, Axios, and Download File
const wallpaper = require('wallpaper');
const axios = require('axios');
var download = require('download-file')




(async() =>{
    await wallpaper.set('hatpo.jpg');

    await wallpaper.get();
})();
