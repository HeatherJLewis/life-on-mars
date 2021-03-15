const fetchPhotoFromNasa = require('./fetchPhotoFromNasa');

async function retrieveDailyPhoto(request, response) {
    try {
        const data = await fetchPhotoFromNasa();
    
        response.json(data);
    } catch(error) {
        response.json({
            error: error.message
        })
    }
}

module.exports = retrieveDailyPhoto;