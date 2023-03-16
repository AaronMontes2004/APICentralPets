import { addDiagnosticQuery, getDiagnosticsQuery, updateDiagnosticQuery } from './../libs/queries/diagnosticQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getDiagnostics = async(req: Request,res: Response): Promise<Response> => {
    try {
        const diagnosticsObtained: any = await pool.query(getDiagnosticsQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los diagnosticos exitosamente",
            data: diagnosticsObtained[0]
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

export const addDiagnostic = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { descriptionDiagnostic } = req.body
 
        const addedDiagnostic: any = await pool.query(addDiagnosticQuery, [descriptionDiagnostic])

        return res.status(201).json({
            status: "OK",
            msg: "El diagnóstico se registró correctamente",
            data: addedDiagnostic[0]
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

export const updateDiagnostic = async(req: Request,res: Response) => {
    try {
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idDiagnostic } = req.params
        const { descriptionDiagnostic } = req.body

        const updatedDiagnostic: any = await pool.query(updateDiagnosticQuery, [descriptionDiagnostic, idDiagnostic])

        return res.status(201).json({
            status: "OK",
            msg: "Se registró el diagnostico correctamente",
            data: updatedDiagnostic[0]
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