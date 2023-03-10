import { Result, validationResult } from 'express-validator';
import { addAppointmentTypeQuery, getAppointmentTypesQuery, updateAppointmentTypeQuery } from './../libs/queries/appointmentTypeQuery';
import pool from "./../database";
import { Request, Response } from "express";

export const getAppointmentTypes = async (req: Request,res: Response): Promise<Response> => {
    try {
        
        const appointmentTypeObtained: any = await pool.query(getAppointmentTypesQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los tipos de cita exitosamente",
            data: appointmentTypeObtained[0]
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

export const addAppointmentType = async(req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { nameAppointmentType, descriptionAppointmentType } = req.body;

        const appointmentTypeAdded: any = await pool.query(addAppointmentTypeQuery, [nameAppointmentType, descriptionAppointmentType])

        return res.status(201).json({
            status: "OK",
            msg: "El registró el tipo de cita correctamente",
            data: appointmentTypeAdded[0]
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

export const updateAppointmentType = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idAppointmentType } = req.params
        const { nameAppointmentType, descriptionAppointmentType } = req.body;

        const appointmentTypeUpdated: any = await pool.query(updateAppointmentTypeQuery, [nameAppointmentType, descriptionAppointmentType, idAppointmentType])

        return res.status(201).json({
            status: "OK",
            msg: "Se actualizó el tipo de cita correctamente",
            data: appointmentTypeUpdated[0]
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