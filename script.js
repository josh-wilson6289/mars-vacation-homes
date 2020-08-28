
$(document).ready(function() {
 
  var queryDate = moment().subtract(1, 'days');
 
  var queryYear = moment(queryDate).format("YYYY");
  var queryMonth = moment(queryDate).format("MM");
  var queryDay = moment(queryDate).format("D");
  var rover = "curiosity";
  var camera = "fhaz";
  
  var key = "l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc";

  var querySelector = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + queryYear + "-" + queryMonth + "-" + queryDay + "&camera=" + camera + "&api_key=" + key;
  
  $.ajax({
    url: querySelector,
    method: "GET"
  }).then (function(response) {
    console.log(response);
  });

  console.log( "Getting Weather for Mars!" );
  getForecast();

});

let marsWeather = [];//adding changes 
  
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

