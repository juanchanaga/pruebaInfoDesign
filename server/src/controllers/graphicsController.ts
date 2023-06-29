import {Request, Response} from 'express';


import pool from '../database';

class GraphicsController {

    public async tramos(req: Request, res: Response): Promise<void> {
        const {fInicial, fFinal} = req.body;
        const graphics = await pool.then(promise => promise.query('SELECT c.Linea, SUM(c.Residencial) AS consumo_residencial, SUM(c.Comercial) AS consumo_comercial, SUM(c.Industrial) AS consumo_industrial, SUM(p.Residencial) AS perdidas_residencial, SUM(p.Comercial) AS perdidas_comercial, SUM(p.Industrial) AS perdidas_industrial, SUM(co.Residencial) AS costo_residencial, SUM(co.Comercial) AS costo_comercial, SUM(co.Industrial) AS costo_industrial FROM consumo_tramo c JOIN costos_tramo co ON c.Fecha = co.Fecha AND c.Linea = co.Linea JOIN perdidas_tramo p ON c.Fecha = p.Fecha AND c.Linea = p.Linea WHERE c.Fecha BETWEEN ? AND ? GROUP BY c.Linea ORDER BY c.Linea', [fInicial, fFinal]));
        res.json(graphics);
    }

    public async cliente(req: Request, res: Response): Promise<void> {
        const {fInicial, fFinal} = req.body;
        const graphics = await pool.then(promise => promise.query('SELECT c.Linea, SUM(c.Residencial) AS consumo_residencial, SUM(c.Comercial) AS consumo_comercial, SUM(c.Industrial) AS consumo_industrial, SUM(p.Residencial) AS perdidas_residencial, SUM(p.Comercial) AS perdidas_comercial, SUM(p.Industrial) AS perdidas_industrial, SUM(co.Residencial) AS costo_residencial, SUM(co.Comercial) AS costo_comercial, SUM(co.Industrial) AS costo_industrial FROM consumo_tramo c JOIN costos_tramo co ON c.Fecha = co.Fecha AND c.Linea = co.Linea JOIN perdidas_tramo p ON c.Fecha = p.Fecha AND c.Linea = p.Linea WHERE c.Fecha BETWEEN ? AND ? GROUP BY c.Linea ORDER BY c.Linea', [fInicial, fFinal]));
        res.json(graphics);
    }

    public async tramosCliente(req: Request, res: Response): Promise<void> {
        const {fInicial, fFinal} = req.body;
        const graphics = await pool.then(promise => promise.query('SELECT TipoConsumo, Linea, Perdidas FROM ( SELECT "Residencial" AS TipoConsumo, pt.Linea, pt.Residencial AS Perdidas FROM perdidas_tramo pt WHERE pt.Fecha BETWEEN ? AND ? UNION ALL SELECT "Comercial" AS TipoConsumo, pt.Linea, pt.Comercial AS Perdidas FROM perdidas_tramo pt WHERE pt.Fecha BETWEEN ? AND ? UNION ALL SELECT "Industrial" AS TipoConsumo, pt.Linea, pt.Industrial AS Perdidas FROM perdidas_tramo pt WHERE pt.Fecha BETWEEN ? AND ? ) AS combined_data ORDER BY TipoConsumo, Perdidas DESC LIMIT 20', [fInicial, fFinal, fInicial, fFinal, fInicial, fFinal]));
        res.json(graphics);
    }

}

const graphicsController = new GraphicsController;
export default graphicsController;