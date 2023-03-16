import { addTreatmentQuery, getTreatmentQuery, updateTreatmentQuery } from './../libs/queries/treatmentQuery';
import pool from './../database';
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getTreatments = async(req: Request,res: Response): Promise<Response> => {
    try {
        const treatmentsObtained: any = await pool.query(getTreatmentQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los tratamientos correctamente",
            data: treatmentsObtained[0]
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

export const addTreatment = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { descriptionTreatment } = req.body;

        const addedTreatment: any = await pool.query(addTreatmentQuery, [descriptionTreatment])

        return res.status(201).json({
            status: "OK",
            msg: "Se registró el tratamiento correctamente",
            data: addedTreatment[0]
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

export const updateTreatment = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idTreatment } = req.params
        const { descriptionTreatment } = req.body;

        const updatedTreatment: any = await pool.query(updateTreatmentQuery, [descriptionTreatment, idTreatment])

        return res.status(201).json({
            status: "OK",
            msg: "Se actualizó el tratamiento correctamente",
            data: updatedTreatment[0]
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