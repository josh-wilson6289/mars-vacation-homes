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
  "sol_keys": [ "607", "608", "609", "610", "611", "612", "613"], 
  "607":  { 
    "AT": { "av": -55.233, "ct": 326642, "mn": -93.024, "mx": -18.233 }, 
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
  "608":  { 
    "AT": { "av": -56.584, "ct": 326642, "mn": -92.004, "mx": -19.584 }, 
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
  "609":  { 
    "AT": { "av": -55.658, "ct": 326642, "mn": -93.012, "mx": -18.584 }, 
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
  "610":  { 
    "AT": { "av": -54.584, "ct": 326642, "mn": -93.836, "mx": -16.584}, 
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
  "611":  { 
    "AT": { "av": -55.224, "ct": 326642, "mn": -93.879, "mx": -16.224}, 
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

      var r = marsWeather.sol_keys[0];

      //setting up sol first 
      var t = parseInt(r);
      $("#sol1").text("Sol: " + t);
      $("#date1").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol1").text(Math.round(marsWeather[t].AT.av));
      $("#minTempSol1").text(Math.round(marsWeather[t].AT.mn));
      $("#maxTempSol1").text(Math.round(marsWeather[t].AT.mx));
       t = t + 1;

      //setting up sol two
      $("#sol2").text("Sol: " + t);
      $("#date2").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol2").text(Math.round(marsWeather[t].AT.av));
      $("#minTempSol2").text(Math.round(marsWeather[t].AT.mn));
      $("#maxTempSol2").text(Math.round(marsWeather[t].AT.mx));
       t = t + 1;

      //setting up sol three
      $("#sol3").text("Sol: " + t);
      $("#date3").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol3").text(Math.round(marsWeather[t].AT.av));
      $("#minTempSol3").text(Math.round(marsWeather[t].AT.mn));
      $("#maxTempSol3").text(Math.round(marsWeather[t].AT.mx));
       t = t + 1;

      //setting up sol four
      $("#sol4").text("Sol: " + t);
      $("#date4").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol4").text(Math.round(marsWeather[t].AT.av));
      $("#minTempSol4").text(Math.round(marsWeather[t].AT.mn));
      $("#maxTempSol4").text(Math.round(marsWeather[t].AT.mx));

      //setting up the main current info 
       $("#currentSol").text("Sol: " + t);
       $("#currentDate").text(marsWeather[t].First_UTC.Time.split('T').shift());
       $("#pressure").text(marsWeather[t].PRE.av  + " Pa");
       $("#windSpeed").text(marsWeather[t].HWS.av  + "m/s");
       $("#windDirection").text(marsWeather[t].WD.most_common.compass_point);
      
    })
    .catch((error) => {
        console.log(error)
    });
 }


