const supertest = require('supertest');
const { createServer } = require('../../createServer');
const nock = require('nock');

const server = createServer();
const request = supertest(server);

describe('GET /dailyPhoto', () => {
    const expectedUrl = 'https://nasa.com/apod/image';
    const response = {
        url: expectedUrl
    }

    beforeAll(() => {
        nock.disableNetConnect();
        nock.enableNetConnect('127.0.0.1');
    });

    beforeEach(() => {
        process.env.NASA_API_KEY = 'fakeApiKey'

        nock('https://api.nasa.gov')
            .get('/planetary/apod')
            .query({ api_key: 'fakeApiKey' })
            .reply(200, response);
    });

    it('should return a 200 status code', async () => {
        const response = await request.get('/dailyPhoto');

        expect(response.status).toEqual(200);
    });

    it('should return the expected URL', async () => {
        const response = await request.get('/dailyPhoto');
        const { url } = response.body;

        expect(url).toEqual(expectedUrl);
    });
});