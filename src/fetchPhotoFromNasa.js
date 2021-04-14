const got = require('got');

async function fetchPhotoFromNasa() {
    const apiKey = process.env.NASA_API_KEY;
    const response = await got('https://api.nasa.gov/planetary/apod', {searchParams: {api_key: apiKey}});

    const { url } = await response.json();

    return {
        url,
    }
}

module.exports = fetchPhotoFromNasa;