var request = require("request");

function showConcertInfo(inputParameter){
  
  var inputParameter = process.argv[2];
  var queryUrl = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp";
  request(queryUrl, function(error, response, body) {
          
          if (!error && response.statusCode === 200) {
          var concerts = JSON.parse(body);
          for (var i = 0; i < concerts.length; i++) {
          console.log(" Event Info ");
          fs.appendFileSync("log.txt", " Event Info \n");
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
          })
          
          ;}