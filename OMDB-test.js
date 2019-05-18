var axios = require("axios");
var fs = require('fs');

var nodeArgs = process.argv;

//OMDB Movie Search Code
var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl).then(
    function (response) {

        console.log("Movie: " + response.data.Title);
        fs.appendFile('log.txt', "Movie: " + response.data.Title + '\n', function (err) {
            if (err) throw err;});

        console.log("Release Year: " + response.data.Year);
        fs.appendFile('log.txt', "Release Year: " + response.data.Year + '\n', function (err) {
            if (err) throw err;});

        console.log("IMDB Rating: " + response.data.imdbRating);
        fs.appendFile('log.txt', "IMDB Rating: " + response.data.imdbRating + '\n', function (err) {
            if (err) throw err;});

        console.log("Country Produced In: " + response.data.Country);
        fs.appendFile('log.txt', "Country Produced In: " + response.data.Country + '\n', function (err) {
            if (err) throw err;});

        console.log("language: " + response.data.Language);
        fs.appendFile('log.txt', "Language: " + response.data.Language + '\n', function (err) {
            if (err) throw err;});

        console.log("Plot: " + response.data.Plot);
        fs.appendFile('log.txt', "Plot: " + response.data.Plot + '\n', function (err) {
            if (err) throw err;});

        console.log("Cast: " + response.data.Actors);
        fs.appendFile('log.txt', "Cast " + response.data.Actors + '\n', function (err) {
            if (err) throw err;});

        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
        fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + '\n', function (err) {
            if (err) throw err;});
    }
);
