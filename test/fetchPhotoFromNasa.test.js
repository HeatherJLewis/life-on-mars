const fetchPhotoFromNasa = require("../src/fetchPhotoFromNasa");
const got = require("got");

jest.mock('got');


describe('fetchPhotoFromNasa', () => {
    beforeEach(() => {
        got.mockReset();
    });

    it('should return the expected format', async () => {
        const data = await fetchPhotoFromNasa();

        expect(data).toEqual({url: expect.any(String)})
    });

    it('should call got with the expected API Key and URL', async () => {
        const fakeAPIKey = 'someAPIKey';
        const apodEndpoint = 'https://api.nasa.gov/planetary/apod';
        const expectedSearchParams = {searchParams: {api_key: fakeAPIKey}};

        await fetchPhotoFromNasa(fakeAPIKey);

        expect(got).toHaveBeenCalledWith(apodEndpoint, expectedSearchParams)
    })

    it.skip('should return the expected format with ', async() => {
        const fakeUrl = "https://www.nasa.gov/image.jpg";
        const fakeData = {
            url: fakeUrl,
        };

        // got.mockResolvedValue({body: JSON.stringify(fakeData)})

        const data = await fetchPhotoFromNasa();

        expect(data).toEqual({url: fakeUrl})
    });


});