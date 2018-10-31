let updateState = function() {
  $( "#temperature" ).text(thermostat.getCurrentTemperature())
  $( "#power-saving-status" ).text(thermostat.powerSaving)
  $( "#temperature" ).attr("class", thermostat.usage());
}

$( document ).ready(function() {
  displayWeather('London');
  thermostat = new Thermostat();
  updateState()
});

$( "#temperature-up" ).click(function() {
  thermostat.increaseTemperature();
  updateState()
});

$( "#temperature-down" ).click(function() {
  thermostat.decreaseTemperature();
  updateState()
});

$( "#temperature-reset" ).click(function() {
  thermostat.reset();
  updateState()
});

$( "#powersaving" ).click(function() {
  thermostat.switchPS();
  updateState()
});

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=fc3e57e13664399db5d092f0aced08c0';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 })}

$('#current-city').change(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
});
