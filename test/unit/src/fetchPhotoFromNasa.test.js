const fetchPhotoFromNasa = require("../../../src/fetchPhotoFromNasa");
const got = require("got");
const { generateEnvironmentVariables } = require("../../../config/environmentVariables");

jest.mock("got");
jest.mock("../../../config/environmentVariables");

describe("fetchPhotoFromNasa", () => {
  const fakeAPIKey = "fakeAPIKey";

  beforeEach(() => {
    got.mockReset();

    generateEnvironmentVariables.mockReturnValue({
      NASA_API_KEY: fakeAPIKey
    })
  });

  it("should return the expected format", async () => {
    const fakeUrl = "https://www.nasa.gov/image2.jpg";
    const fakeNASAResponse = {
      body: {
        url: fakeUrl,
      },
    };

    got.mockResolvedValue(fakeNASAResponse);

    const data = await fetchPhotoFromNasa();

    expect(data).toEqual({ url: expect.any(String) });
  });

  it("should call got with the expected API key", async () => {
    const fakeUrl = "https://www.nasa.gov/image2.jpg";
    const fakeNASAResponse = {
      body: {
        url: fakeUrl,
      },
    };
    const expectedOptions = {
      searchParams: { api_key: fakeAPIKey },
      responseType: "json",
    };

    got.mockResolvedValue(fakeNASAResponse);

    await fetchPhotoFromNasa();

    expect(got).toHaveBeenCalledWith(expect.any(String), expectedOptions);
  });

  it("should call got with the expected URL", async () => {
    const fakeUrl = "https://www.nasa.gov/image2.jpg";
    const apodEndpoint = "https://api.nasa.gov/planetary/apod";
    const fakeNASAResponse = {
      body: {
        url: fakeUrl,
      },
    };

    got.mockResolvedValue(fakeNASAResponse);

    await fetchPhotoFromNasa();

    expect(got).toHaveBeenCalledWith(apodEndpoint, expect.any(Object));
  });

  it("should return expected data from NASA APOD API", async () => {
    const fakeUrl = "https://www.nasa.gov/image2.jpg";
    const fakeNASAResponse = {
      body: {
        url: fakeUrl,
      },
    };

    got.mockResolvedValue(fakeNASAResponse);

    const data = await fetchPhotoFromNasa();

    expect(data).toEqual({ url: fakeUrl });
  });
});
