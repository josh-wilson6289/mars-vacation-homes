$(document).ready(function() {

// array to store user-checked rovers
var roversArr = [];


var key = "l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc";

  function getInput() {
      // get rover id and assign it to name.  pass it to getLastDate
      // camera equals user input for #cameraSelect.  Pass camera to getLastDate
      //getLastDate(rover, camera);
    
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
      //   // if statements to determine the correct maxDate for user camera
       
      if (roversArr[i].name == "opportunity" && roversArr[i].camera == "navcam") {
        roversArr[i].maxDate = "2018-05-16";
      }
      else if (roversArr[i].name == "opportunity" && roversArr[i].camera =="fhaz") {
        roversArr[i].maxDate = "2018-06-04";
      }
      else if (roversArr[i].name == "opportunity" && roversArr[i].camera == "rhaz") {
        roversArr[i].maxDate = "2018-05-17";
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "navcam") {
        roversArr[i].maxDate = "2010-02-26";
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "fhaz") {
        roversArr[i].maxDate = "2010-02-14";
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "rhaz") {
        roversArr[i].maxDate = "2010-02-09";
      }
      else {
        $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?&api_key=" + key,
        method: "GET"
        }).then (function(response) {
          console.log(response.photo_manifest.max_date);
          roversArr[i].maxDate = response.photo_manifest.max_date;
          
        });
      }   
    }
      console.log(roversArr);
      // pass rover array to displayPicture function
      // displayPicture(roversArr);
  }  



  function displayPicture(roversArr) {
    for (var i = 0; i < roversArr.length; i++)
     
      $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roversArr[i].name + "/photos?earth_date=" + roversArr[i].maxDate + "&camera=" + roversArr[i].camera + "&api_key=" + key,
        method: "GET"
      }).then (function(response) {
        //here's where we'll get the latest image from the given rover and camera
        console.log(response.photos[0].img_src);

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
