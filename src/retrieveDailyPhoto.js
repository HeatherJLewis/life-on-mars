const fetchPhotoFromNasa = require('./fetchPhotoFromNasa');

function retrieveDailyPhoto(request, response) {
    fetchPhotoFromNasa();
    
    response.json({
        url: ""
    });
}

module.exports = retrieveDailyPhoto;