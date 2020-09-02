$(document).ready(function() {

getForecast();

var photoDisplay = $("#photoDisplay");
var roversArr = [];
var key = "l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc";

  // pulls in user-selected data after submit button is clicked
  function getInput() {
    
    // gets value from the selected camera
    var camera = $("#cameraSelect option:selected").val();

    // assigns camera and rover name to new object
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
  
  // assigns the maxDate to each rover and camera selected, then runs displayPicture function
  function getLastDate(roversArr) { 
    for (var i = 0; i < roversArr.length; i++) {
  
      if (roversArr[i].name == "opportunity" && roversArr[i].camera == "navcam") {
        roversArr[i].maxDate = "2018-05-16";
        var opportunity = roversArr[i];
        displayPicture(opportunity);
      }
      else if (roversArr[i].name == "opportunity" && roversArr[i].camera =="fhaz") {
        roversArr[i].maxDate = "2018-06-04";
        var opportunity = roversArr[i];
        displayPicture(opportunity);
      }
      else if (roversArr[i].name == "opportunity" && roversArr[i].camera == "rhaz") {
        roversArr[i].maxDate = "2018-05-17";
        var opportunity = roversArr[i];
        displayPicture(opportunity);
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "navcam") {
        roversArr[i].maxDate = "2010-02-26";
        var spirit = roversArr[i]
        displayPicture(spirit);
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "fhaz") {
        roversArr[i].maxDate = "2010-02-14";
        var spirit = roversArr[i];
        displayPicture(spirit);
      }
      else if (roversArr[i].name == "spirit" && roversArr[i].camera == "rhaz") {
        roversArr[i].maxDate = "2010-02-09";
        var spirit = roversArr[i];
        displayPicture(spirit);
      }
      // curiosity's maxDate changes, so ajax call is needed here
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
    // gets the image using all parameters
      $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover.name + "/photos?earth_date=" + rover.maxDate + "&camera=" + rover.camera + "&api_key=" + key,
        method: "GET"
      }).then (function(response) {
        // creates DOM elements to display photos on the page
        photoDisplay = $("#photoDisplay");
        var photoDisplay = $("#photoDisplay");

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

    $("#submitBtn").click(function() {
      event.preventDefault();
      roversArr = [];
      photoDisplay.empty();
      getInput();
    });

    $("#clearBtn").click(function(){
      event.preventDefault;
      photoDisplay.empty();
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
    "First_UTC": {"Time": "2019-08-29T08:03:59Z", "Last_UTC": "2019-08-30T08:43:34Z", "Season": 'Fall' } 
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
    "First_UTC": {"Time": "2019-08-30T08:03:59Z", "Last_UTC": "2019-08-31T08:43:34Z", "Season": 'Fall' } 
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
      $("#avgTempSol1").text(Math.round(marsWeather[t].AT.av) + "˚" + " C");
      $("#minTempSol1").text(Math.round(marsWeather[t].AT.mn) + "˚" + " C");
      $("#maxTempSol1").text(Math.round(marsWeather[t].AT.mx) + "˚" + " C");
       t = t + 1;

      //setting up sol two
      $("#sol2").text("Sol: " + t);
      $("#date2").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol2").text(Math.round(marsWeather[t].AT.av) + "˚" + " C");
      $("#minTempSol2").text(Math.round(marsWeather[t].AT.mn) + "˚" + " C");
      $("#maxTempSol2").text(Math.round(marsWeather[t].AT.mx) + "˚" + " C");
       t = t + 1;

      //setting up sol three
      $("#sol3").text("Sol: " + t);
      $("#date3").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol3").text(Math.round(marsWeather[t].AT.av) + "˚" + " C");
      $("#minTempSol3").text(Math.round(marsWeather[t].AT.mn) + "˚" + " C");
      $("#maxTempSol3").text(Math.round(marsWeather[t].AT.mx) + "˚" + " C");
       t = t + 1;

      //setting up sol four
      $("#sol4").text("Sol: " + t);
      $("#date4").text(marsWeather[t].First_UTC.Time.split('T').shift());
      $("#avgTempSol4").text(Math.round(marsWeather[t].AT.av) + "˚" + " C");
      $("#minTempSol4").text(Math.round(marsWeather[t].AT.mn) + "˚" + " C");
      $("#maxTempSol4").text(Math.round(marsWeather[t].AT.mx) + "˚" + " C");

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

});


