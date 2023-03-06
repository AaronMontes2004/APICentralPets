import { Result } from 'express-validator';
import { validationResult } from 'express-validator';
import { getPetsQuery } from './../libs/queries/petQuery';
import pool from "./../database";
import { Request, Response } from "express";

export const getPets = async(req: Request,res: Response): Promise<Response> => {
    try {

        const petsObtained: any = await pool.query(getPetsQuery);

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las mascotas exitosamente",
            data: petsObtained[0]
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

export const addPet = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        return res.status(201).json({msg: "AGREGADO"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

const updatePet = async (req: Request,res: Response) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}