const got = require("got");
const { NASA_API_KEY } = require("../config/environmentVariables.js");

async function fetchPhotoFromNasa() {
  console.log(NASA_API_KEY);
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
