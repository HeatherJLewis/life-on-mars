const got = require('got');

async function fetchPhotoFromNasa(apiKey) {
    const response = await got('https://api.nasa.gov/planetary/apod', {searchParams: {api_key: apiKey}})

    return {
        url: "https://www.nasa.gov/image.jpg"
    }
}

module.exports = fetchPhotoFromNasa;