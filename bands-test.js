var queryUrl =  "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",



var Events = new BandsInTownEvents();

Events.getEvents(function( events ){
    for(var i = 0; i < events.length; i++){
      console.log( events[i].venue.city + ", " + events[i].venue.region );
    }
  },function( errors ){
    console.log(errors);
  });