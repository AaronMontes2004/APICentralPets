import { getAppointmentsQuery } from './../libs/queries/appointmentQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getAppointments = async(req: Request,res: Response) => {
    try {
        
        const appointmentsObtained: any = await pool.query(getAppointmentsQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las citas correctamente",
            data: appointmentsObtained[0]
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

export const addAppointment = async(req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
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