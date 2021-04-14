const got = require('got');

async function fetchPhotoFromNasa() {
    const apiKey = process.env.NASA_API_KEY;
    const options = {searchParams: {api_key: apiKey}, responseType: 'json'};
    const { body } = await got('https://api.nasa.gov/planetary/apod', options);
    const { url } = body;

    return {
        url,
    }
}

module.exports = fetchPhotoFromNasa;