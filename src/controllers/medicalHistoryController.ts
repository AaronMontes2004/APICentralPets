import { addMedicalHistoryQuery, getMedicalHistoryQuery, updateMedicalHistoryQuery } from './../libs/queries/medicalHistoryQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getMedicalHistory = async(req: Request,res: Response) => {
    try {
        
        const medicalHistoryObtained: any = await pool.query(getMedicalHistoryQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los historiales médicos exitosamente",
            data: medicalHistoryObtained[0]
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

export const addMedicalHistory = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { reasonMedicalHistory, idDiagnostic, idTreatment, idUser, idPet } = req.body

        const addedMedicalHistory: any = await pool.query(addMedicalHistoryQuery, [new Date(), reasonMedicalHistory, idDiagnostic, idTreatment, idUser, idPet])

        return res.status(201).json({
            status: "OK",
            msg: "El historial médico se registró correctamente",
            data: addedMedicalHistory[0]
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

export const updateMedicalHistory = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idMedicalHistory } = req.params
        const { reasonMedicalHistory, idDiagnostic, idTreatment, idUser, idPet } = req.body

        const updatedMedicalHistory: any = await pool.query(updateMedicalHistoryQuery, [reasonMedicalHistory, idDiagnostic, idTreatment, idUser, idPet, idMedicalHistory])

        return res.status(201).json({
            status: "OK",
            msg: "El historial médico se actualizó correctamente",
            data: updatedMedicalHistory[0]
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