const supertest = require('supertest');
const { createServer } = require('../../createServer');

const server = createServer();
const request = supertest(server);

describe('GET /dailyPhoto', () => {
    it('should return a 200 status code', async () => {
        const response = await request.get('/dailyPhoto');

        expect(response.status).toEqual(200);
    });

    it('should return the expected URL', () => {

    });
});