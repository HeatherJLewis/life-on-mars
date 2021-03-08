const retrieveDailyPhoto = require('../src/retrieveDailyPhoto');
const fetchPhotoFromNasa = require('../src/fetchPhotoFromNasa');

jest.mock('../src/fetchPhotoFromNasa');

describe('Middleware - retrieveDailyPhoto', () => {
    it('should respond with JSON', () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        };

        retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fakeResponse.json).toHaveBeenCalled();
    });

    it('should respond with the expected JSON object', () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        }

        retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fakeResponse.json).toHaveBeenCalledWith({
            url: expect.any(String)
        });
    });

    it('should call fetchPhotoFromNasa', () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        }

        retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fetchPhotoFromNasa).toHaveBeenCalled();
    });
});