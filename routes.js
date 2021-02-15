import { Router } from 'express';

const createRoutes = () => {
    const router = Router();
    
    router.get("/", (request, response) => {
        response.send("Hello World!");
    });

    console.log(router);
    return router;
}

export default createRoutes;