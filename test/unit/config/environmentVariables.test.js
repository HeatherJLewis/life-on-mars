describe("environment variables", () => {
  let dotenv;
  let myNumber = 0;

  beforeEach(() => {
    dotenv = require("dotenv"); // get it once - mockNo1
    dotenv.version = myNumber++;
    jest.mock("dotenv");
  });

  afterEach(() => {
    jest.resetModules(); // reset environmentVariables
    // jest.resetAllMocks(); // reset dotenv mockNo1
  });

  //mockNo1
  it("should export an object with a property of PORT", () => {
    // still have mockNo1
    dotenv.config.mockReturnValue({}); // mockNo1 return object
    console.log("In Test 1", dotenv.version);
    const exportValue = require("../../../config/environmentVariables"); // fresh environmentVariable which brings in fresh dotenv (mockNo2)

    expect(exportValue).toHaveProperty("PORT");
  });

  it("should call config", () => {
    dotenv.config.mockReturnValue({}); // tell mockNo1 at the top to return an object
    console.log("In Test 2", dotenv.version);
    require("../../../config/environmentVariables");

    expect(dotenv.config).toHaveBeenCalled();
  });

  it("should throw an error if .config returns an error", () => {
    dotenv.config.mockReturnValue({
      error: new Error(),
    });
    console.log("In Test 3", dotenv.version);

    expect(() => {
      require("../../../config/environmentVariables");
    }).toThrowError();
  });

  // it("should set a value to the PORT property", () => {
  //   const fakePort = 1234;

  //   expect(exportValue.PORT).toBe(fakePort);
  // });
});
