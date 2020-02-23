$("#click").on("click", function(e) {
e.preventDefault();

var searchedCity = $("#citySearch").val();

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&cnt=7&APPID=79ad2202cb3cb3e2b38a9622377b75bf";


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
$(".temp1").text("Temp: " + response.list[1].main.temp);
$(".humid1").text("Humidity: " + response.list[1].main.humidity);
$(".temp2").text("Temp: " + response.list[2].main.temp);
$(".humid2").text("Humidity: " + response.list[2].main.humidity);
$(".temp3").text("Temp: " + response.list[3].main.temp);
$(".humid3").text("Humidity: " + response.list[3].main.humidity);
$(".temp4").text("Temp: " + response.list[4].main.temp);
$(".humid4").text("Humidity: " + response.list[4].main.humidity);
$(".temp5").text("Temp: " + response.list[5].main.temp);
$(".humid5").text("Humidity: " + response.list[5].main.humidity);

});

});