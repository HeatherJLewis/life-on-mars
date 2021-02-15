import { Router } from 'express';
import createRoutes from './routes.js'

jest.mock('express');

describe('index.js', () => {
    const mockRouter = jest.fn();

    const fakeExpress = {
        Router: () => mockRouter,
    }

    beforeEach(() => {
        express.mockImplementation(() => {
            return fakeExpress;
        })
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('should create router', () => {
        createRoutes();
    })

})