const got = require('got');

async function fetchPhotoFromNasa(apiKey) {
    const response = await got('https://api.nasa.gov/planetary/apod', {searchParams: {api_key: apiKey}}).json();

    const { url } = response;

    return {
        url,
    }
}

module.exports = fetchPhotoFromNasa;