// Needs to be active on document load
$(document).ready(function(){
  var actors = ["Judi Dench", "Diane Lane", "Meryl Streep", "Jennifer Lawrence", "Kate Hudson", "Allison Williams"];


  //going to focus on pushing new buttons rather than ajax for now
  function createButtons(){
    $("#actor-buttons").empty();

    for (var i = 0; i < actors.length; i++) {
      var b = $("<button>");
      b.addClass("actor");
      b.attr("data-name", actors[i]);
      b.text(actors[i]);
      $("#actor-buttons").append(b);
      
    }
  }
  //add actorsbutton click event
  $("#add-actor").click(function(){
    event.preventDefault();
    var actorTyped = $("#actor-input").val().trim();
    actors.push(actorTyped);
   createButtons();
  })

  // click on actors names
  function displayGIFS() {
    var selected = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Kit9Fo5OHeGDtHLUurXM65czq5nwC7UU&limit=10&tag=" + selected;
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      var imageURL = response.data.image_url;
      var actorImage = $("<img>");
      actorImage.attr("src", imageURL);
      $("#actor-gifs").append(actorImage);

    })

  }


  createButtons();
  $("#actor-buttons").click(displayGIFS);
  


})