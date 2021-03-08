const { Router } = require('express');

const createRoutes = () => {
    const router = Router();

    router.get("/dailyPhoto", () => {});

    return router;
};

module.exports =  createRoutes;