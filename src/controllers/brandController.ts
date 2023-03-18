import { addBrandQuery, findByIdBrandQuery, getBrandsQuery, updateBrandQuery } from './../libs/queries/brandQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getBrands = async (req: Request,res: Response): Promise<Response> => {
    try {

        const brandsObtained: any = await pool.query(getBrandsQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las marcas exitosamente",
            data: brandsObtained[0]
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

export const addBrand = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);
        
        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { nameBrand } = req.body

        const addedBrand: any = await pool.query(addBrandQuery, [nameBrand])

        return res.status(201).json({
            status: "OK",
            msg: "La marca se registró correctamente",
            data: addedBrand[0]
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

export const updateBrand = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);
        
        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idBrand } = req.params
        const { nameBrand } = req.body;

        const updatedBrand: any = await pool.query(updateBrandQuery, [nameBrand, idBrand])

        return res.status(201).json({
            status: "OK",
            msg: "La marca de actualizó correctamente",
            data: updatedBrand[0]
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

export const findByIdBrand = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);
        
        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idBrand } = req.params

        const brandObtained: any = await pool.query(findByIdBrandQuery, [idBrand])

        return res.status(201).json({
            status: "OK",
            msg: "Se obtuvo la marca exitosamente",
            data: brandObtained[0][0]
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