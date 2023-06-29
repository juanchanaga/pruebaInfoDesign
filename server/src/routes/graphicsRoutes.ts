import express, { Router } from 'express';

import graphicsController from '../controllers/graphicsController';

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/tramos', graphicsController.tramos);
        this.router.get('/cliente', graphicsController.cliente);
        this.router.get('/tramos-cliente', graphicsController.tramosCliente);
    }

}

export default new GameRoutes().router;