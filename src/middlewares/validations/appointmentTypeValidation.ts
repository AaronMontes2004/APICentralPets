import { verifyNameAppointmentType, verifyIdAppointmentType, verifyNameAppointmentTypeRepeat } from './../../libs/queriesValidation/appointmentTypeQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addAppointmentTypeValidation = [
    body("nameAppointmentType").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").isLength({max: 250}).withMessage("El nombre debe tener menos de 250 caracteres").custom(async(value) => {
        const res: any = await pool.query(verifyNameAppointmentType, [value])
        if (res[0].length > 0) throw new Error("El nombre ya existe")
        return true;
    }),
    body("descriptionAppointmentType").notEmpty().withMessage("La descripción no puede estar vacia").isString().withMessage("La descripción debe ser un texto").isLength({max: 500}).withMessage("La descripción debe tener menos de 500 caracteres")
]

export const updateAppointmentTypeValidation = [
    param("idAppointmentType").notEmpty().withMessage("El id no puede estar vacio").isInt().withMessage("El id debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdAppointmentType, [value])
        if (res[0].length === 0) throw new Error("El tipo de cita no existe")
        return true;
    }),
    body("nameAppointmentType").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").isLength({max: 250}).withMessage("El nombre debe tener menos de 250 caracteres").custom(async(value, {req}) => {
        const res: any = await pool.query(verifyNameAppointmentTypeRepeat, [req.params?.idAppointmentType ,value])
        if (res[0].length > 0) throw new Error("El nombre ya existe")
        return true;
    }),
    body("descriptionAppointmentType").notEmpty().withMessage("La descripción no puede estar vacia").isString().withMessage("La descripción debe ser un texto").isLength({max: 500}).withMessage("La descripción debe tener menos de 500 caracteres")
]

export const findByIdAppointmentTypeValidation = [
    param("idAppointmentType").notEmpty().withMessage("El id no puede estar vacio").isInt().withMessage("El id debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdAppointmentType, [value])
        if (res[0].length === 0) throw new Error("El tipo de cita no existe")
        return true;
    })
]