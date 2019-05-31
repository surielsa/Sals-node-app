
require("dotenv").config();


var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var userOption = process.argv[2];
var inputParameter = process.argv[3];


UserInputs(userOption, inputParameter);

function UserInputs (userOption, inputParameter){
    switch (userOption) {
        case 'concert-this':
            showConcertInfo(inputParameter);
            break;
        case 'spotify-this-song':
            showSongInfo(inputParameter);
            break;
        case 'movie-this':
            showMovieInfo(inputParameter);
            break;
        case 'do-what-it-says':
            showSomeInfo();
            break;
        default:
            console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}



//Spotify Info *********************************************************************
function showSongInfo(inputParameter) {
    if (inputParameter === undefined) {
        inputParameter = "The Sign"; 
    }
    spotify.search(
                   {
                   type: "track",
                   query: inputParameter
                   },
                   function (err, data) {
                   if (err) {
                   console.log("Error occurred: " + err);
                   return;
                   }
                   var songs = data.tracks.items;
                   
                   for (var i = 0; i < songs.length; i++) {
                   console.log("SONG");
                   fs.appendFileSync("log.txt", "SONG\n");
                   console.log("Song name: " + songs[i].name);
                   fs.appendFileSync("log.txt", "song name: " + songs[i].name +"\n");
                   console.log("Preview song: " + songs[i].preview_url);
                   fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url +"\n");
                   console.log("Album: " + songs[i].album.name);
                   fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
                   console.log("Artist(s): " + songs[i].artists[0].name);
                   fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
                   }
                   }
                   );
};

//OMDB Info *********************************************************************

function showMovieInfo(inputParameter){
    if (inputParameter === undefined) {
        inputParameter = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        fs.appendFileSync("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" +"\n");
        console.log("It's on Netflix!");
        fs.appendFileSync("log.txt", "It's on Netflix!\n");
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + inputParameter + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
            var movies = JSON.parse(body);
            console.log("MOVIE");
            fs.appendFileSync("log.txt", "MOVIE\n");
            console.log("Title: " + movies.Title);
            fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
            console.log("Release Year: " + movies.Year);
            fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
            console.log("IMDB Rating: " + movies.imdbRating);
            fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
            console.log("Country of Production: " + movies.Country);
            fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
            console.log("Language: " + movies.Language);
            fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
            console.log("Plot: " + movies.Plot);
            fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
            console.log("Actors: " + movies.Actors);
            fs.appendFileSync("log.txt", "Cast: " + movies.Actors + "\n");
            //console.log("Rotten Tomatoes Rating: " + movies.Ratings[1] + "\n");
            //fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies) + "\n");            
            } else{
            console.log('Error occurred.');
            }
            
            });}

//Bands in Town Info *********************************************************************
function showConcertInfo(inputParameter){
    var queryUrl = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
            var concerts = JSON.parse(body);
            for (var i = 0; i < concerts.length; i++) {
            console.log("EVENT");
            fs.appendFileSync("log.txt", "EVENT\n");
            console.log(i);
            fs.appendFileSync("log.txt", i+"\n");
            console.log("Name of the Venue: " + concerts[i].venue.name);
            fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name+"\n");
            console.log("Venue Location: " +  concerts[i].venue.city);
            fs.appendFileSync("log.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
            console.log("Date of the Event: " +  concerts[i].datetime);
            fs.appendFileSync("log.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
            }
            } else{
            console.log('Error occurred.');
            }
            });}

//function showSomeInfo(){
    //fs.readFile('random.txt', 'utf8', function(err, data){
                //if (err){
                //return console.log(err);
                //}
                //var dataArr = data.split(',');
                //UserInputs(dataArr[0], dataArr[1]);
                //});
                
//}

function showSomeInfo(){
    fs.readFile('random2.txt', 'utf8', function(err, data){
                if (err){
                return console.log(err);
                }
                var dataArr = data.split(',');
                UserInputs(dataArr[0], dataArr[1]);
                });
                
}

//function showSomeInfo(){
    //fs.readFile('random3.txt', 'utf8', function(err, data){
                //if (err){
                //return console.log(err);
               //}
                //var dataArr = data.split(',');
                //UserInputs(dataArr[0], dataArr[1]);
                //});
                
//}