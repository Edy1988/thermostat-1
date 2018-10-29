describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should return 20 at the start", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
})
