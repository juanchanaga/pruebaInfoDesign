import express, { Router } from 'express';

import graphicsController from '../controllers/graphicsController';

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        // this.router.get('/', graphicsController.list);
        // this.router.get('/:id', graphicsController.getOne);
        // this.router.post('/', graphicsController.create);
        // this.router.put('/:id', graphicsController.update);
        // this.router.delete('/:id', graphicsController.delete);
    }

}

export default new GameRoutes().router;