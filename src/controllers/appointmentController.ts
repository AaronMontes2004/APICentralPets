import { addAppointmentQuery, findAppointmentByIdPetQuery, findByIdAppointmentQuery, getAppointmentsQuery, updateAppointmentQuery } from './../libs/queries/appointmentQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getAppointments = async(req: Request,res: Response): Promise<Response> => {
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

export const addAppointment = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { descriptionAppointment, idReservation, idClinic, idPet, idVet, idAppointmentType } = req.body;

        const addedAppointment: any = await pool.query(addAppointmentQuery, [new Date(),descriptionAppointment, idReservation, idClinic, idPet, idVet, idAppointmentType])

        return res.status(201).json({
            status: "OK",
            msg: "Se cita se registró correctamente",
            data: addedAppointment[0]
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

export const updateAppointment = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idAppointment } = req.params;
        const { descriptionAppointment, idReservation, idClinic, idPet, idVet, idAppointmentType } = req.body;

        const updatedAppointment: any = await pool.query(updateAppointmentQuery, [descriptionAppointment, idReservation, idClinic, idPet, idVet, idAppointmentType, idAppointment])

        return res.status(201).json({
            status: "OK",
            msg: "La cita se actualizó exitosamente",
            data: updatedAppointment[0]
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

export const findByIdAppointment = async(req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idAppointment } = req.params

        const appointmentObtained: any = await pool.query(findByIdAppointmentQuery, [idAppointment])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo la cita exitosamente",
            data: appointmentObtained[0][0]
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

export const findAppointmentByIdPet = async(req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idPet } = req.params

        const appointmentObtained: any = await pool.query(findAppointmentByIdPetQuery, [idPet])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo la cita exitosamente",
            data: appointmentObtained[0]
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