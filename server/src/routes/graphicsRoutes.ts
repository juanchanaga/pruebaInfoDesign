import { Router } from 'express';

import graphicsController from '../controllers/graphicsController';

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/tramos', graphicsController.tramos);
        this.router.post('/cliente', graphicsController.cliente);
        this.router.post('/tramos-cliente', graphicsController.tramosCliente);
    }

}

export default new GameRoutes().router;