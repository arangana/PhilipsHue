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

// Set the lamp with id '1' to off
// My living room light was id '1'
api.setLightState(1, state.off())
    .then(displayResult)
    .fail(displayError)
    .done();