require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//var userOption = process.argv[2];
var inputParameter = process.argv[2];
var fs = require('fs');

//Spotify Song Search Code
spotify.search({ type: 'track', query: inputParameter, limit: 10 }, function (err, data) {

    if (err) {
        return console.log('Error occurred: ' + err);
    }

    //console.log(data.tracks.items);

    var songs = data.tracks.items;

    for (var i = 0; i < songs.length; i++) {

        console.log("Artist: " + songs[i].artists[0].name);

        fs.appendFile('log.txt', "Artist: " + songs[i].artists[0].name + '\n', function (err) {
            if (err) throw err;
        });

        console.log("Song name: " + songs[i].name);

        fs.appendFile('log.txt', "Song name: " + songs[i].name + '\n', function (err) {
            if (err) throw err;
        });

        console.log("Album: " + songs[i].album.name);

        fs.appendFile('log.txt', "Album: " + songs[i].album.name + '\n', function (err) {
            if (err) throw err;
        });


    }


})


