import { addSaleQuery, getSalesQuery, updateSaleQuery } from './../libs/queries/saleQuery';
import pool from "./../database";
import { Request, Response } from "express"
import { Result, validationResult } from 'express-validator';

export const getSales = async(req: Request,res: Response) => {
    try {

        const salesObtained: any = await pool.query(getSalesQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las ventas exitosamente",
            data: salesObtained[0]
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const addSale = async(req: Request,res: Response) => {
    try {
        const err: Result = validationResult(req)

        if(!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idUser } = req.body;

        const addedSale: any = await pool.query(addSaleQuery, [idUser ? idUser : null, new Date()])

        return res.status(201).json({
            status: "OK",
            msg: "La venta se registró correctamente",
            data: addedSale[0]
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const updateSale = async(req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req)

        if(!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSale } = req.params
        const { idUser } = req.body;

        const updatedSale: any = await pool.query(updateSaleQuery, [idUser ? idUser : null, idSale])
        
        return res.status(201).json({
            status: "OK",
            msg: "La venta se actualizó correctamente",
            data: updatedSale[0]
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}