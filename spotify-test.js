var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


spotify.search({ type: 'track', query: "All The Small Things" }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items);

    var songs = data.tracks.items

    for (var i = 0; i < songs.length; i++) {

        console.log("name" + songs[i].name);

        var fs = require('fs');

        fs.appendFile('log.txt', songs[i].name + '\n', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });


    }



});