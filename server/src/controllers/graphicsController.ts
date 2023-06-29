import {Request, Response} from 'express';


import pool from '../database';

class GraphicsController {

    public async form(req: Request, res: Response): Promise<void> {
        // const graphics = await pool.then(promise => promise.query('SELECT * FROM games'));
        // res.json(graphics);
        res.json("formulario");
    }

    public async tramos(req: Request, res: Response): Promise<void> {
        // const graphics = await pool.then(promise => promise.query('SELECT * FROM games'));
        // res.json(graphics);
        res.json("tramos");
    }

    public async cliente(req: Request, res: Response): Promise<void> {
        // const graphics = await pool.then(promise => promise.query('SELECT * FROM games'));
        // res.json(graphics);
        res.json("cliente");
    }

    public async tramosCliente(req: Request, res: Response): Promise<void> {
        // const graphics = await pool.then(promise => promise.query('SELECT * FROM games'));
        // res.json(graphics);
        res.json("tramos/cliente");
    }

}

const graphicsController = new GraphicsController;
export default graphicsController;