let updateState = function() {
  $( "#temperature" ).text(thermostat.getCurrentTemperature())
  $( "#power-saving-status" ).text(thermostat.powerSaving)
  $( "#temperature" ).attr("class", thermostat.usage());
}

$( document ).ready(function() {
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
