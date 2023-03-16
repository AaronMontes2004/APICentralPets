import { verifyIdDiagnostic } from './../../libs/queriesValidation/diagnosticQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addDiagnosticValidation = [
    body("descriptionDiagnostic").notEmpty().withMessage("La descripción no puede estar vacio").isString().withMessage("La descripción debe ser un texto")
]

export const updateDiagnosticValidation = [
    param("idDiagnostic").notEmpty().withMessage("El id del diagnostico no puede estar vacio").isString().withMessage("El diagnostico debe ser un texto").custom(async(value) => {
        const res:any = await pool.query(verifyIdDiagnostic, [value])
        if (res[0].length === 0) throw new Error("El diagnostico no existe")
        return true;
    }),
    body("descriptionDiagnostic").notEmpty().withMessage("La descripción no puede estar vacio").isString().withMessage("La descripción debe ser un texto")
]