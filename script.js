$("#click").on("click", function(e) {
e.preventDefault();

var searchedCity = $("#citySearch").val();

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&cnt=7&APPID=79ad2202cb3cb3e2b38a9622377b75bf";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);


console.log($("#citySearch").val());

$(".city").text(response.city.name);
$(".temp").text("Temperature: " + response.list[0].main.temp);
$(".humid").text("Humidity: " + response.list[0].main.humidity);
$(".ws").text("Wind Speed: " + response.list[0].wind.speed);
$(".temp").text("Temperature: " + response.list[0].main.temp);

});

});