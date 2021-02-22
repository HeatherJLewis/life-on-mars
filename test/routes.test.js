const express = require('express');
const createRoutes = require('../src/routes.js');

jest.mock('express');

describe('index.js', () => {
    // const mockRouter = jest.fn();

    // const fakeExpress = {
    //     Router: () => mockRouter,
    // }

    beforeEach(() => {
        // express.mockImplementation(() => {
        //     return fakeExpress;
        // })
    })

    afterEach(() => {
        // jest.restoreAllMocks();
    })

    it.only('should create an express router', () => {
        createRoutes();

        const spyRouter = jest.spyOn(express, 'Router');

        expect(spyRouter).toHaveBeenCalled();
    })

})