const { generateEnvironmentVariables } = require("../../../config/environmentVariables");

describe('generateEnvironmentVariables', () => {
    let originalProcessEnv;

    beforeEach(() => {
        originalProcessEnv = process.env;
    });

    afterEach(() => {
        process.env = originalProcessEnv;
    });

    it('should return expected environment variable values', () => {
        const expectedEnvironmentVariables = {
            PORT: "somePort",
            NASA_API_KEY: "someApiKey",
        };

        process.env = { ...expectedEnvironmentVariables, OTHER_VALUE: 'betty' };

        expect(generateEnvironmentVariables()).toEqual(expectedEnvironmentVariables);
    });
});