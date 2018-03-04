// Needs to be active on document load
$(document).ready(function(){
  var actors = ["Judi Dench", "Diane Lane", "Meryl Streep", "Jennifer Lawrence", "Kate Hudson", "Allison Williams"];
/*  var actorSelected = actors[i];
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actorSelected + "&api_key=Kit9Fo5OHeGDtHLUurXM65czq5nwC7UU&limit=10"; */

  //going to focus on pushing new buttons rather than ajax for now
  function createButtons(){
    $("#actor-buttons").empty();
    
    for (var i = 0; i < actors.length; i++) {
      var b = $("<button>");
      b.addClass("actor");
    b.data("name", actors[i]);
      b.text(actors[i]);
      $("#actor-buttons").append(b);
      
    }
  }
  //button click event
  $("#add-actor").click(function(){
    event.preventDefault();
    var actorTyped = $("#actor-input").val().trim();
    actors.push(actorTyped);
   createButtons();
  })

  createButtons();


})