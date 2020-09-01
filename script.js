//Rover Select 
var curiosityEl = document.querySelector("#curiosity");
var opportunityEl =  document.querySelector("#opportunity");
var spiritEl = document.querySelector("#spirit");
//Camera Select 
var cameraSelectEl = document.querySelector("#cameraSelect");
var fhazSelect = document.querySelector("#fhaz");
var rhazSelect = document.querySelector("#rhaz");
var navcamSelect = document.querySelector("#navcam");
//Button Select 
var submitBtnEl = document.querySelector("#submitBtn");
var clearBtnEl = document.querySelector("#clearBtn");
//Validation (must choose only 1 camera, must choose only 1 camera)

$(document).ready(function() {
 
  // var inputRover;
  // var inputCamera;


  var key = "l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc";

  function getInput(inputRover, inputCamera) {
      // get rover id and assign it to name.  pass it to getLastDate
      // camera equals user input for #cameraSelect.  Pass camera to getLastDate
      //getLastDate(rover, camera);
    }
  
  function getLastDate(name, camera) {
  
    var querySelector = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + name + "?" + "&api_key=" + key;

      $.ajax({
        url: querySelector,
        method: "GET"
      }).then (function(response) {
      
      // creates generic rover object to store user values into
      rover = {
        "name": "",
        "camera": "",
        "maxDate": "" 
      };


      // if statements to determine the correct maxDate for user camera
      // if (rover = curiosity) {
      //   rover.maxDate = response.photo_manifest.max_date;
      // }
      // else if (rover = opportinity || camera = navcam) {
      //   rover.maxDate = "2018-05-16";
      // }
      // else if (rover = opportunity || camera = fhaz) {
      //   rover.maxDate = "2018-06-04";
      // }
      // else if (rover = opportunity || camera = rhaz) {
      //   rover.maxDate = "2018-05-17";
      // }
      // else if (rover = spirit || camera = navcam) {
      //   rover.maxDate = "2010-02-26";
      // }
      // else if (rover = spirit || camera = fhaz) {
      //   rover.maxDate = "2010-02-14";
      // }
      // else {
      //   rover.maxDate = "2010-02-09"
      // }

      rover.camera = camera;
      rover.name = name;

      // pass rover object to displayPicture function
      displayPicture(rover);
    });   
  }



  function displayPicture(rover) {
  
    var querySelector = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover.name + "/photos?earth_date=" + rover.maxDate + "&camera=" + rover.camera + "&api_key=" + key;

      $.ajax({
        url: querySelector,
        method: "GET"
      }).then (function(response) {
        //here's where we'll get the latest image from the given rover and camera
        console.log(response.photos[0].img_src);

      });
    }
});

  console.log( "Getting Weather for Mars!" );
  getForecast();

});

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


