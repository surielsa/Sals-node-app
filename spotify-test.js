require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//var userOption = process.argv[2];
var inputParameter = process.argv[3];



spotify.search({ type: 'track', query: inputParameter }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

   console.log(data.tracks.items);

    var songs = data.tracks.items;

    for (var i = 0; i < songs.length; i++) {

        console.log("name" + songs[i].name);


        var fs = require('fs');
        fs.appendFile('log.txt', songs[i].name + '\n', function (err) {
            if (err) throw err;
            console.log("name" + songs[i].artists[0].name);
        });
        fs.appendFile('log.txt', songs[i].artists[0].name + '\n', function (err) {
            if (err) throw err;

        });


    }


})


