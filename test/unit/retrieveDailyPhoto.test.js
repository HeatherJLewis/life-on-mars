const retrieveDailyPhoto = require('../../src/retrieveDailyPhoto');
const fetchPhotoFromNasa = require('../../src/fetchPhotoFromNasa');

jest.mock('../../src/fetchPhotoFromNasa');

describe('Middleware - retrieveDailyPhoto', () => {
    it('should respond with JSON', async () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        };

        await retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fakeResponse.json).toHaveBeenCalled();
    });

    // Leaving this in as a learning point
    it('should respond with the expected JSON object', async () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        }

        const expectedData = {
            url: "https://www.nasa.gov/image.jpg"
        }

        fetchPhotoFromNasa.mockResolvedValue(expectedData);

        await retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fakeResponse.json).toHaveBeenCalledWith({
            url: expect.any(String)
        });
    });

    it('should call fetchPhotoFromNasa', async () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        }

        await retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fetchPhotoFromNasa).toHaveBeenCalled();
    });

    it('should respond with the expected JSON object from fetchPhotoFromNasa', async () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        }
        
        const expectedData = {
            url: "https://www.nasa.gov/image.jpg"
        }

        fetchPhotoFromNasa.mockResolvedValue(expectedData);

        await retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fakeResponse.json).toHaveBeenCalledWith(expectedData);
    });

    it('should respond with an error', async () => {
        const fakeRequest = {};
        const fakeResponse = {
            json: jest.fn()
        }
        
        const givenError = new Error('no photo for you today');

        const expectedErrorData = {
            error: givenError.message
        }
    
        fetchPhotoFromNasa.mockRejectedValue(givenError);

        await retrieveDailyPhoto(fakeRequest, fakeResponse);

        expect(fakeResponse.json).toHaveBeenCalledWith(expectedErrorData);
    });
});