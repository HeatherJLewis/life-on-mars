describe("environment variables", () => {
  let dotenv;
  let originalProcessEnv;

  beforeEach(() => {
    dotenv = require("dotenv");
    jest.mock("dotenv");
    originalProcessEnv = process.env;
  });

  afterEach(() => {
    jest.resetModules();
    process.env = originalProcessEnv;
  });

  it("should export an object with a property of PORT", () => {
    dotenv.config.mockReturnValue({});
    process.env = {
      PORT: "somePort",
      NASA_API_KEY: "someApiKey",
    };

    const exportValue = require("../../../config/environmentVariables");

    expect(exportValue).toMatchSnapshot();
  });

  it("should call config", () => {
    dotenv.config.mockReturnValue({});
    require("../../../config/environmentVariables");

    expect(dotenv.config).toHaveBeenCalled();
  });

  it("should throw an error if .config returns an error", () => {
    dotenv.config.mockReturnValue({
      error: new Error(),
    });

    expect(() => {
      require("../../../config/environmentVariables");
    }).toThrowError();
  });
});
