import { addSaleDetailQuery, getSalesDetailQuery, updateSaleDetailQuery } from './../libs/queries/saleDetailQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getSalesDetail = async(req: Request, res: Response) => {
    try {

        const salesDetailObtained: any = await pool.query(getSalesDetailQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los detalles de la venta exitosamente",
            data: salesDetailObtained[0]
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

export const addSaleDetail = async(req: Request, res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(201).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSale, idProduct, quantityProduct, unitPriceProduct, totalPayProduct } = req.body

        const addedSaleDetail: any = await pool.query(addSaleDetailQuery, [idSale, idProduct, quantityProduct, unitPriceProduct, totalPayProduct])

        return res.status(201).json({
            status: "OK",
            msg: "El detalle de la venta se registró correctamente",
            data: addedSaleDetail[0]
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

export const updateSaleDetail = async(req: Request, res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(201).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { numSale } = req.params;
        const { idSale, idProduct, quantityProduct, unitPriceProduct, totalPayProduct } = req.body

        const updatedSaleDetail: any = await pool.query(updateSaleDetailQuery, [idSale, idProduct, quantityProduct, unitPriceProduct, totalPayProduct, numSale])

        return res.status(201).json({
            status: "OK",
            msg: "El detalle de la venta se actualizó correctamente",
            data: updatedSaleDetail[0]
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