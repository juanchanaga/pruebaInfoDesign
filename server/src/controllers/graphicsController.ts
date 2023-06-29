import {Request, Response} from 'express';


import pool from '../database';

class GraphicsController {

    // public async list(req: Request, res: Response): Promise<void> {
    //     const graphics = await pool.then(promise => promise.query('SELECT * FROM games'));
    //     res.json(graphics);
    // }
    //
    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const {id} = req.params;
    //     const graphics = await pool.then(promise => promise.query('SELECT * FROM graphics WHERE id = ?', [id]));
    //     console.log(graphics.length);
    //     if (graphics.length > 0) {
    //         return res.json(graphics[0]);
    //     }
    //     res.status(404).json({text: "The graphic doesn't exits"});
    // }
    //
    // public async create(req: Request, res: Response): Promise<void> {
    //     const result = await pool.then(promise => promise.query('INSERT INTO graphics set ?', [req.body]));
    //     res.json({message: 'Graphic Saved'});
    // }
    //
    // public async update(req: Request, res: Response): Promise<void> {
    //     const {id} = req.params;
    //     const oldGraphics = req.body;
    //     await pool.then(promise => promise.query('UPDATE graphics set ? WHERE id = ?', [req.body, id]));
    //     res.json({message: "The graphics was Updated"});
    // }
    //
    // public async delete(req: Request, res: Response): Promise<void> {
    //     const {id} = req.params;
    //     await pool.then(promise => promise.query('DELETE FROM graphics WHERE id = ?', [id]));
    //     res.json({message: "The graphics was deleted"});
    // }

}

const graphicsController = new GraphicsController;
export default graphicsController;