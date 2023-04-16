import { verifyDate, verifyIdReservation } from './../../libs/queriesValidation/reservationQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addReservationValidation = [
    body("dateReservation").notEmpty().withMessage("La fecha de reserva no puede estar vacio")/* .isDate().withMessage("La fecha ingresada no tiene el formato correcto") */.custom((value) => {

        if (!verifyDate(value)) throw new Error("La fecha ingresada no puede ser una antigua a la de hoy")
        return true
    }),
    body("timeReservation").notEmpty().withMessage("La hora de reserva no puede estar vacio").isString().withMessage("La hora de reserva debe ser un texto"),
    body("maximumTimeReservation").notEmpty().withMessage("La hora máxima no puede estar vacio").isString().withMessage("La hora máxima debe ser un texto")
]

export const updateReservationValidation = [
    param("idReservation").notEmpty().withMessage("El id de la reservación no puede estar vacio").isInt().withMessage("El id de la reservación debe ser un número entero").custom(async(value) => {
        const res :any = await pool.query(verifyIdReservation, [value]);
        if (res[0].length === 0) throw new Error("La reservación no existe")
        return true;
    }),
    body("dateReservation").notEmpty().withMessage("La fecha de reserva no puede estar vacio")/* .isDate().withMessage("La fecha ingresada no tiene el formato correcto") */.custom((value) => {
        console.log(value);
        
        if (!verifyDate(value)) throw new Error("La fecha ingresada no puede ser una antigua a la de hoy")
        return true
    }),
    body("timeReservation").notEmpty().withMessage("La hora de reserva no puede estar vacio").isString().withMessage("La hora de reserva debe ser un texto"),
    body("maximumTimeReservation").notEmpty().withMessage("La hora máxima no puede estar vacio").isString().withMessage("La hora máxima debe ser un texto")
]

export const findByIdReservationValidation = [
    param("idReservation").notEmpty().withMessage("El id de la reservación no puede estar vacio").isInt().withMessage("El id de la reservación debe ser un número entero").custom(async(value) => {
        const res :any = await pool.query(verifyIdReservation, [value]);
        if (res[0].length === 0) throw new Error("La reservación no existe")
        return true;
    })
]