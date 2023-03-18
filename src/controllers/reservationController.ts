import { getReservationsQuery, addReservationQuery, updatedReservationQuery, findByIdReservationQuery } from './../libs/queries/reservationQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getReservations = async (req: Request,res: Response) => {
    try {
        
        const reservationsObtained: any = await pool.query(getReservationsQuery);

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las reservaciones exitosamente",
            data: reservationsObtained[0]
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

export const addReservation = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { dateReservation, timeReservation, maximumTimeReservation } = req.body;

        const addedReservation: any = await pool.query(addReservationQuery, [dateReservation, timeReservation, maximumTimeReservation]);

        return res.status(201).json({
            status: "OK",
            msg: "La reserva se registró exitosamente",
            data: addedReservation[0]
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

export const updateReservation = async (req: Request,res: Response) => {
    try {
        
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idReservation } = req.params
        const { dateReservation, timeReservation, maximumTimeReservation } = req.body;

        const updatedReservation: any = await pool.query(updatedReservationQuery, [dateReservation, timeReservation, maximumTimeReservation, idReservation]);

        return res.status(201).json({
            status: "OK",
            msg: "La reservación se actualizó correctamente",
            data: updatedReservation[0]
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

export const findByIdReservation = async (req: Request, res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idReservation } = req.params

        const reservationObtained: any = await pool.query(findByIdReservationQuery, [idReservation])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo la reservación exitosamente",
            data: reservationObtained[0][0]
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