const express = require("express");
const retrieveDailyPhoto = require("../../../src/retrieveDailyPhoto.js");
const createRoutes = require("../../../src/routes.js");

jest.mock("express");

describe("index.js", () => {
  it("should create an express router", () => {
    const fakeRouter = {
      get: jest.fn(),
    };

    express.Router.mockImplementation(() => {
      return fakeRouter;
    });

    createRoutes();

    expect(express.Router).toHaveBeenCalled();
  });

  it("should return an express router", () => {
    const fakeRouter = {
      get: jest.fn(),
    };

    express.Router.mockImplementation(() => {
      return fakeRouter;
    });

    const routeHandler = createRoutes();

    expect(routeHandler).toEqual(fakeRouter);
  });

  it("should add expected daily photo get request handler with retrieveDailyPhoto middleware", () => {
    const fakeRouter = {
      get: jest.fn(),
    };

    express.Router.mockImplementation(() => {
      return fakeRouter;
    });

    createRoutes();

    expect(fakeRouter.get).toHaveBeenCalledWith(
      "/dailyPhoto",
      retrieveDailyPhoto
    );
  });
});
