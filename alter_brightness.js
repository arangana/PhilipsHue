var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(result);
};

var displayError = function(err) {
    console.error(err);
};

var host = "10.0.0.9",
    username = "adirang",
    api = new HueApi(host, username),
    state = lightState.create();

// First ensure you tuen on light before changing brightness
// Set the lamp with id '1' to on
// My living room light was id '1'
api.setLightState(1, state.on())
    .then(displayResult)
    .fail(displayError)
    .done();

// Set the brightness of lamp with id '1' to 50
// This is on a scale of 0-255, so it is low brightness
// My living room light was id '1'
api.setLightState(1, state.bri(50))
    .then(displayResult)
    .fail(displayError)
    .done();
