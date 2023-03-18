import { verifyIdTreatment } from './../../libs/queriesValidation/treatmentQueryValidation';
import pool from './../../database';
import { body, param } from "express-validator";

export const addTreatmentValidation = [
    body("descriptionTreatment").notEmpty().withMessage("La descripción no puede estar vacio").isString().withMessage("La descripción debe ser un texto")
]

export const updateTreatmentValidation = [
    param("idTreatment").notEmpty().withMessage("El id del tratamiento no puede estar vacio").isInt().withMessage("El id del tratamiento debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdTreatment, [value])
        if (res[0].length === 0) throw new Error("El tratamiento no existe")
        return true;
    }),
    body("descriptionTreatment").notEmpty().withMessage("La descripción no puede estar vacio").isString().withMessage("La descripción debe ser un texto")
]

export const findByIdTreatmentValidation = [
    param("idTreatment").notEmpty().withMessage("El id del tratamiento no puede estar vacio").isInt().withMessage("El id del tratamiento debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdTreatment, [value])
        if (res[0].length === 0) throw new Error("El tratamiento no existe")
        return true;
    })
]