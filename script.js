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
        console.log(response);

      });
    }
    console.log( "Getting Weather for Mars!" );
    getForecast();
});


let marsWeather = [];
var exampleWeather = {
  "sol_keys": [ "259", "260", "261", "262", "263", "264", "265"], 
  "259":  { 
    "AT": { "av": -95.233, "ct": 326642, "mn": -101.024, "mx": -27.149 }, 
    "HWS": { "av": 4.35, "ct": 154146, "mn": 0.156, "mx": 17.617 }, 
    "PRE": { "av": 761.006, "ct": 163012, "mn": 742.1498, "mx": 780.3891 }, 
    "WD": {  
    "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "8": { "compass_degrees": 180.0, "compass_point": "S", "compass_right": 0.0, 
    "compass_up": -1.0, "ct": 17699 },
    "9": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "10": { "compass_degrees": 225.0, "compass_point": "SW", "compass_right": -0.707106781187,
    "compass_up": -0.707106781187, "ct": 27124 }
    },
    "First_UTC": {"Time": "2019-08-26T08:03:59Z", "Last_UTC": "2019-08-27T08:43:34Z", "Season": 'Summer' } 
  }, 
  "260":  { 
    "AT": { "av": -74.233, "ct": 326642, "mn": -101.024, "mx": -27.149 }, 
    "HWS": { "av": 4.80, "ct": 154146, "mn": 0.156, "mx": 17.617 }, 
    "PRE": { "av": 761.006, "ct": 163012, "mn": 742.1498, "mx": 780.3891 }, 
    "WD": {  
    "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "8": { "compass_degrees": 180.0, "compass_point": "S", "compass_right": 0.0, 
    "compass_up": -1.0, "ct": 17699 },
    "9": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "10": { "compass_degrees": 225.0, "compass_point": "SW", "compass_right": -0.707106781187,
    "compass_up": -0.707106781187, "ct": 27124 }
    },
    "First_UTC": {"Time": "2019-08-27T08:03:59Z", "Last_UTC": "2019-08-28T08:43:34Z", "Season": 'Summer' } 
  }, 
  "261":  { 
    "AT": { "av": -71.233, "ct": 326642, "mn": -101.024, "mx": -27.149 }, 
    "HWS": { "av": 4.35, "ct": 154146, "mn": 0.156, "mx": 17.617 }, 
    "PRE": { "av": 761.006, "ct": 163012, "mn": 742.1498, "mx": 780.3891 }, 
    "WD": {  
    "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "8": { "compass_degrees": 180.0, "compass_point": "S", "compass_right": 0.0, 
    "compass_up": -1.0, "ct": 17699 },
    "9": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "10": { "compass_degrees": 225.0, "compass_point": "SW", "compass_right": -0.707106781187,
    "compass_up": -0.707106781187, "ct": 27124 }
    },
    "First_UTC": {"Time": "2019-08-28T08:03:59Z", "Last_UTC": "2019-08-29T08:43:34Z", "Season": 'Fall' } 
  }, 
  "262":  { 
    "AT": { "av": -71.233, "ct": 326642, "mn": -101.024, "mx": -27.149 }, 
    "HWS": { "av": 4.35, "ct": 154146, "mn": 0.156, "mx": 17.617 }, 
    "PRE": { "av": 761.006, "ct": 163012, "mn": 742.1498, "mx": 780.3891 }, 
    "WD": {  
    "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "8": { "compass_degrees": 180.0, "compass_point": "S", "compass_right": 0.0, 
    "compass_up": -1.0, "ct": 17699 },
    "9": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "10": { "compass_degrees": 225.0, "compass_point": "SW", "compass_right": -0.707106781187,
    "compass_up": -0.707106781187, "ct": 27124 }
    },
    "First_UTC": {"Time": "2019-08-30T08:03:59Z", "Last_UTC": "2019-08-31T08:43:34Z", "Season": 'Fall' } 
  }, 
  "263":  { 
    "AT": { "av": -71.233, "ct": 326642, "mn": -101.024, "mx": -27.149 }, 
    "HWS": { "av": 4.35, "ct": 154146, "mn": 0.156, "mx": 17.617 }, 
    "PRE": { "av": 761.006, "ct": 163012, "mn": 742.1498, "mx": 780.3891 }, 
    "WD": {  
    "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "8": { "compass_degrees": 180.0, "compass_point": "S", "compass_right": 0.0, 
    "compass_up": -1.0, "ct": 17699 },
    "9": { "compass_degrees": 202.5, "compass_point": "SSW", "compass_right": -0.382683432365, 
    "compass_up": -0.923879532511, "ct": 28551 }, 
    "10": { "compass_degrees": 225.0, "compass_point": "SW", "compass_right": -0.707106781187,
    "compass_up": -0.707106781187, "ct": 27124 }
    },
    "First_UTC": {"Time": "2019-08-31T08:03:59Z", "Last_UTC": "2019-09-01T08:43:34Z", "Season": 'Fall' } 
  }, 
  "validity_checks": {
    "259": { 
      "AT": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
      "valid": true },
      "HWS": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
      "valid": true },
      "PRE": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
      "valid": true },
      "WD": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
      "valid": true }
      }, 
      "260": { 
        "AT": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "HWS": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "PRE": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "WD": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true }
        }, 
      "261": { 
        "AT": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "HWS": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "PRE": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "WD": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true }
        }, 
      "263": { 
        "AT": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "HWS": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "PRE": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "WD": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true }
        }, 
      "264": { 
        "AT": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "HWS": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "PRE": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true },
        "WD": { "sol_hours_with_data": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        "valid": true }
        }, 
    "sol_hours_required": 18, 
    "sols_checked": [
      "612"
    ]
  }
} 
  
 function getForecast() {
    //Link to the Nasa API
    var NasaQueryURL = "https://api.nasa.gov/insight_weather/?api_key=l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc&feedtype=json&ver=1.0"
  
    //Call the Ajax to get the weather data
    $.ajax({
      url: NasaQueryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      //Adding in a check to make sure that we are recieving data from NASA if not then use the hardcoded object. 
      if(response.sol_keys.length === 0){
        console.log(exampleWeather);
        marsWeather = exampleWeather;
      }else{
        marsWeather = response;
      }
      
    })
    .catch((error) => {
        console.log(error)
    });
 }


