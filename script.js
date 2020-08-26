//Adding in code to test- Shubhangi M

//Josh Back End Code 









// Shubhangi Back End Code 
$( document ).ready(function() {
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
 