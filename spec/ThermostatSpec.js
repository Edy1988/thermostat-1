describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should return 20 at the start", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it("should increase the temperature by 1", function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  })

  it("should decrease the temperature by 1", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })

  it("should not drop below 10", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  })

  it("should not rise above 25 if power saving mode on", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  })

  it("should not rise above 32 if power saving mode off", function() {
    thermostat.powerSaving = false;
    for (var i = 0; i < 20; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  })

  it("should switch power saving mode from on to off", function() {
    thermostat.switchPS();
    expect(thermostat.powerSaving).toEqual(false);
  })

  it("should switch power saving mode from off to on", function() {
    thermostat.powerSaving = false;
    thermostat.switchPS();
    expect(thermostat.powerSaving).toEqual(true);
  })

  it("should reset temperature to 20", function() {
    thermostat.temperature = 30;
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it("current useage should be 'low-usage' < 18", function() {
    thermostat.temperature = 15;
    expect(thermostat.usage()).toEqual('low-usage');
  })

  it("current useage should be 'medium-usage' < 25", function() {
    thermostat.temperature = 24;
    expect(thermostat.usage()).toEqual('medium-usage');
  })

  it("current useage should be 'medium-usage' >= 25", function() {
    thermostat.temperature = 25;
    expect(thermostat.usage()).toEqual('high-usage');
  })

})
