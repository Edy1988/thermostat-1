'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10
  this.powerSaving = true
  this.MAX_TEMPERATURE = 25
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
if (!this.isMaxTemperature()) {
  this.temperature += 1;
}
};

Thermostat.prototype.decreaseTemperature = function() {
  if (!this.isMinTemperature()) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.isMinTemperature = function() {
   return this.temperature === this.MIN_TEMPERATURE
};

Thermostat.prototype.isMaxTemperature = function() {
   return this.temperature === this.MAX_TEMPERATURE
};
