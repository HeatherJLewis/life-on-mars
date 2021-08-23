const got = require("got");
const { generateEnvironmentVariables } = require("../config/environmentVariables.js");

async function fetchPhotoFromNasa() {
  const { NASA_API_KEY } = generateEnvironmentVariables();
  const options = {
    searchParams: { api_key: NASA_API_KEY },
    responseType: "json",
  };
  const { body } = await got("https://api.nasa.gov/planetary/apod", options);
  const { url } = body;

  return {
    url,
  };
}

module.exports = fetchPhotoFromNasa;
