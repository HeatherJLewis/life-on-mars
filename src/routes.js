const { Router } = require('express');
const retrieveDailyPhoto = require('./retrieveDailyPhoto');

const createRoutes = () => {
    const router = Router();

    router.get("/dailyPhoto", retrieveDailyPhoto);

    return router;
};

module.exports =  createRoutes;