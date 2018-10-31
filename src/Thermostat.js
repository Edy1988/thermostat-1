'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10
  this.powerSaving = true
  this.MAX_TEMP_POWER_SAVING = 25
  this.MAX_TEMP = 32
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
  if (this.powerSaving) {
    return this.temperature === this.MAX_TEMP_POWER_SAVING
  } else {
    return this.temperature === this.MAX_TEMP
  }
};

Thermostat.prototype.switchPS = function() {
  this.powerSaving = !this.powerSaving;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
}
