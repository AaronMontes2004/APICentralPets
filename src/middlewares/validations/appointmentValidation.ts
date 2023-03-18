import { verifyIdAppointment, verifyIdAppointmentType, verifyIdClinic, verifyIdPet, verifyIdReservation, verifyIdVet } from './../../libs/queriesValidation/appointmentQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addAppointmentValidation = [
    body("descriptionAppointment").notEmpty().withMessage("La descripción no puede estar vacia").isString().withMessage("La descripción debe ser un texto"),
    body("idReservation").notEmpty().withMessage("La reservación no puede estar vacia").isInt().withMessage("El id de la reservación debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdReservation, [value])
        if (res[0].length === 0) throw new Error("La reservación no existe") 
        return true;
    }),
    body("idClinic").notEmpty().withMessage("La clínica no puede estar vacio").isInt().withMessage("El id de la clínica debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdClinic, [value])
        if (res[0].length === 0) throw new Error("La clínica no existe") 
        return true;
    }),
    body("idPet").notEmpty().withMessage("La mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe") 
        return true;
    }),
    body("idVet").notEmpty().withMessage("El veterinario no puede estar vacio").isInt().withMessage("El id de la veterinaria debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdVet, [value])
        if (res[0].length === 0) throw new Error("La veterinaria no existe") 
        return true;
    }),
    body("idAppointmentType").notEmpty().withMessage("El tipo de cita no puede estar vacio").isInt().withMessage("El id del tipo de cita debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdAppointmentType, [value])
        if (res[0].length === 0) throw new Error("El tipo de cita no existe") 
        return true;
    })
]

export const updateAppointmentValidation = [
    param("idAppointment").notEmpty().withMessage("El id de la cita no puede estar vacio").isInt().withMessage("El id de la cita debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdAppointment, [value])
        if (res[0].length === 0) throw new Error("La cita no existe")
        return true;
    }),
    body("descriptionAppointment").notEmpty().withMessage("La descripción no puede estar vacia").isString().withMessage("La descripción debe ser un texto"),
    body("idReservation").notEmpty().withMessage("La reservación no puede estar vacia").isInt().withMessage("El id de la reservación debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdReservation, [value])
        if (res[0].length === 0) throw new Error("La reservación no existe") 
        return true;
    }),
    body("idClinic").notEmpty().withMessage("La clínica no puede estar vacio").isInt().withMessage("El id de la clínica debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdClinic, [value])
        if (res[0].length === 0) throw new Error("La clínica no existe") 
        return true;
    }),
    body("idPet").notEmpty().withMessage("La mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe") 
        return true;
    }),
    body("idVet").notEmpty().withMessage("El veterinario no puede estar vacio").isInt().withMessage("El id de la veterinaria debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdVet, [value])
        if (res[0].length === 0) throw new Error("La veterinaria no existe") 
        return true;
    }),
    body("idAppointmentType").notEmpty().withMessage("El tipo de cita no puede estar vacio").isInt().withMessage("El id del tipo de cita debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdAppointmentType, [value])
        if (res[0].length === 0) throw new Error("El tipo de cita no existe") 
        return true;
    })
]

export const findByIdAppointmentValidation = [
    param("idAppointment").notEmpty().withMessage("El id de la cita no puede estar vacio").isInt().withMessage("El id de la cita debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdAppointment, [value])
        if (res[0].length === 0) throw new Error("La cita no existe")
        return true;
    })
]