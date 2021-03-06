
// $(document).ready(function(){
  // array for first buttons
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
  };

  //add actorsbutton click event
  $("#add-actor").click(function(){
    event.preventDefault();
    var actorTyped = $("#actor-input").val().trim();
    actors.push(actorTyped);
   createButtons();
  });

  // AJAX call to display GIFS
  function displayGIFS() {
    var selected = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + selected + "&api_key=Kit9Fo5OHeGDtHLUurXM65czq5nwC7UU&limit=10";
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
    
        var imageURL = results[i].images.fixed_height.url;
       
        var fixedStill = results[i].images.fixed_height_still.url;
      
        var imageDiv = $("<span class='imageDiv'>")
        var actorImage = $("<img class='gif'>");
        var rating = $("<p>").text("Rating: " + results[i].rating);
        actorImage.attr("src", imageURL);
        actorImage.attr("data-state", "animate");
        actorImage.attr("data-still", fixedStill);
        actorImage.attr("data-animate", imageURL)
        
        imageDiv.prepend(rating);
        imageDiv.append(actorImage);
        $("#actor-gifs").append(imageDiv);

        
      };
      $("img.gif").click(function(){
          var state = $(this).attr("data-state");
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });


    })
    $("#actor-gifs").empty();

  }
  // calling the create Buttons function
  createButtons();
  // click event for when a button with a class of actor is clicked 
  $("#actor-buttons").on("click", "button.actor", displayGIFS);
  
  
  


// })