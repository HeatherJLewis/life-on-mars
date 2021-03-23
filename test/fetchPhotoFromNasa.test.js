const fetchPhotoFromNasa = require("../src/fetchPhotoFromNasa");
const got = require("got");

jest.mock('got');


describe('fetchPhotoFromNasa', () => {
    beforeEach(() => {
        got.mockReset();
    });

    it('should return the expected format', async () => {
        const fakeUrl = "https://www.nasa.gov/image2.jpg";
        const fakeNASAResponse = {
            url: fakeUrl,
        };

        got.mockResolvedValue({json: () => Promise.resolve(fakeNASAResponse)})

        const data = await fetchPhotoFromNasa();

        expect(data).toEqual({url: expect.any(String)})
    });

    it('should call got with the expected API Key and URL', async () => {
        const fakeUrl = "https://www.nasa.gov/image2.jpg";
        const fakeAPIKey = 'someAPIKey';
        const apodEndpoint = 'https://api.nasa.gov/planetary/apod';
        const expectedSearchParams = {searchParams: {api_key: fakeAPIKey}};
        const fakeNASAResponse = {
            url: fakeUrl,
        };

        got.mockResolvedValue({json: () => Promise.resolve(fakeNASAResponse)})

        await fetchPhotoFromNasa(fakeAPIKey);

        expect(got).toHaveBeenCalledWith(apodEndpoint, expectedSearchParams)
    })

    it('should return expected data from NASA APOD API', async() => {
        const fakeAPIKey = 'someAPIKey';

        const fakeUrl = "https://www.nasa.gov/image2.jpg";
        const fakeNASAResponse = {
            url: fakeUrl,
        };

        got.mockResolvedValue({json: () => Promise.resolve(fakeNASAResponse)})

        const data = await fetchPhotoFromNasa(fakeAPIKey);

        expect(data).toEqual({url: fakeUrl})
    });
});