const fetchPhotoFromNasa = require('./fetchPhotoFromNasa');

async function retrieveDailyPhoto(request, response) {
    try {
        const data = await fetchPhotoFromNasa();

        response.json(data);
    } catch (error) {
        response.status(500).json({
            error: error.message
        })
    }
}

module.exports = retrieveDailyPhoto;