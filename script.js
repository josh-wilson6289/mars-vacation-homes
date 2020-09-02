$(document).ready(function() {
  var photoDisplay = $(".photoDisplay");

// array to store user-checked rovers
var roversArr = [];


var key = "l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc";

  function getInput() {
    photoDisplay.empty();

    var camera = $("#cameraSelect option:selected").val();

    if (document.getElementById("curiosity") == false && document.getElementById("opportunity") == false && document.getElementById("spirit") == false) {
      alert("Please choose a rover!");
    }
    if (document.getElementById("curiosity").checked == true) {
      var curiosityRover = {
      "name": "curiosity",
      "camera": camera, 
      "maxDate": ""};
      roversArr.push(curiosityRover);
    }
    if (document.getElementById("opportunity").checked == true) {
      var opportunityRover = {
        "name": "opportunity",
        "camera": camera, 
        "maxDate": ""};
      roversArr.push(opportunityRover);
    }
    if (document.getElementById("spirit").checked == true) {
      var spiritRover = {
        "name": "spirit",
        "camera": camera, 
        "maxDate": ""};
      roversArr.push(spiritRover);
    }
    getLastDate(roversArr);
  }
  
  function getLastDate(roversArr) { 
    for (var i = 0; i < roversArr.length; i++) {
      // if statements to determine the correct maxDate for user camera
       
      if (roversArr[i].name == "opportunity" && roversArr[i].camera == "NAVCAM") {
        roversArr[i].maxDate = "2018-05-16";
        var opportunity = roversArr[i];
        displayPicture(opportunity);
      }
      else if (roversArr[i].name == "opportunity" && roversArr[i].camera =="FHAZ") {
        roversArr[i].maxDate = "2018-06-04";
        var opportunity = roversArr[i];
        displayPicture(opportunity);
      }
      else if (roversArr[i].name == "opportunity" && roversArr[i].camera == "RHAZ") {
        roversArr[i].maxDate = "2018-05-17";
        var opportunity = roversArr[i];
        displayPicture(opportunity);
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "NAVCAM") {
        roversArr[i].maxDate = "2010-02-26";
        var spirit = roversArr[i]
        displayPicture(spirit);
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "FHAZ") {
        roversArr[i].maxDate = "2010-02-14";
        var spirit = roversArr[i];
        displayPicture(spirit);
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "RHAZ") {
        roversArr[i].maxDate = "2010-02-09";
        var spirit = roversArr[i];
        displayPicture(spirit);
      }
      else {
        $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?&api_key=" + key,
        method: "GET"
        }).then (function(response) {
        
          // gets the index for curiosity, since the ajax call takes longer to return a value and i would be undefined
          var index = roversArr.findIndex(function(x){return x.name === "curiosity"});
          roversArr[index].maxDate = response.photo_manifest.max_date;
          var curiosity = roversArr[index];
          displayPicture(curiosity);
        });
      }   
    }
  }  

  function displayPicture(rover) {
      $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover.name + "/photos?earth_date=" + rover.maxDate + "&camera=" + rover.camera + "&api_key=" + key,
        method: "GET"
      }).then (function(response) {
        //here's where we'll get the latest image from the given rover and camera
        console.log(response.photos[0].img_src)
        photoDisplay = $("#photoDisplay");
        var photo = $("<img>");
        var roverName = $("<h3>");
        var roverDescription = $("<p>"); 

        photo.attr("src", response.photos[0].img_src);
        photo.attr("class", "roverPhoto");
        roverName.attr("class", "roverName");
        roverDescription.attr("class", "roverDescription");

        roverName.text(rover.name);
        roverDescription.text("Photo taken on " + moment(rover.maxDate).format("MMMM do YYYY") + " with " + rover.camera + " camera");


        photoDisplay.append(photo);
        photoDisplay.append(roverName);
        photoDisplay.append(roverDescription);
      });
    }

    // submit button runs getInput function
    $("#submitBtn").click(function() {
      event.preventDefault();
    // clears out any previous items in roversArr
      roversArr = [];
      getInput();
    });

    // still need to get this working
    $("#clearBtn").click(function(){
      event.preventDefault;
      // this should clear out the photos once the clear button is clicked
      // $("#photoRow").empty();
      console.log("click");
    });



  console.log( "Getting Weather for Mars!" );
  getForecast();



let marsWeather = [];
  
 function getForecast() {
    //Link to the Nasa API
    var NasaQueryURL = "https://api.nasa.gov/insight_weather/?api_key=l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc&feedtype=json&ver=1.0"
  
    //Call the Ajax to get the weather data
    $.ajax({
      url: NasaQueryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    })
    .catch((error) => {
        console.log(error)
    });
 }

});
