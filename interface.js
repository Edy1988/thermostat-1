$( document ).ready(function() {
  thermostat = new Thermostat();
  $( "#temperature" ).text(thermostat.getCurrentTemperature())
});

$( "#temperature-up" ).click(function() {
  thermostat.increaseTemperature();
  $( "#temperature" ).text(thermostat.getCurrentTemperature())
});
