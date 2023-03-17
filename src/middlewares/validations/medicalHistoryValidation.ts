import { verifyIdDiagnostic, verifyIdHistorial, verifyIdPet, verifyIdTreatment, verifyIdUser } from './../../libs/queriesValidation/medicalHistoryQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addMedicalHistoryValidation = [
    body("reasonMedicalHistory").notEmpty().withMessage("El motivo no puede estar vacio").isString().withMessage("EL motivo debe ser un texto"),
    body("idDiagnostic").notEmpty().withMessage("El diagnostico no puede estar vacio").isInt().withMessage("El id del diagnostico debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdDiagnostic, [value])
        if (res[0].length === 0) throw new Error("El diagnostico no existe")
        return true;
    }),
    body("idTreatment").notEmpty().withMessage("El tratamiento no puede estar vacio").isInt().withMessage("El id del tratamiento debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdTreatment, [value])
        if (res[0].length === 0) throw new Error("El tratamiento no existe")
        return true;
    }),
    body("idUser").notEmpty().withMessage("El usuario no puede estar vacio").isInt().withMessage("El id del usuario debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdUser, [value])
        if (res[0].length === 0) throw new Error("El usuario no existe")
        return true;
    }),
    body("idPet").notEmpty().withMessage("La mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe")
        return true;
    })
]

export const updateMedicalHistoryValidation = [
    param("idMedicalHistory").notEmpty().withMessage("El id del historial médico no puede estar vacio").isInt().withMessage("El id del historial médico debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdHistorial, [value])
        if (res[0].length === 0) throw new Error("El historial médico no existe")
        return true;
    }),
    body("reasonMedicalHistory").notEmpty().withMessage("El motivo no puede estar vacio").isString().withMessage("EL motivo debe ser un texto"),
    body("idDiagnostic").notEmpty().withMessage("El diagnostico no puede estar vacio").isInt().withMessage("El id del diagnostico debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdDiagnostic, [value])
        if (res[0].length === 0) throw new Error("El diagnostico no existe")
        return true;
    }),
    body("idTreatment").notEmpty().withMessage("El tratamiento no puede estar vacio").isInt().withMessage("El id del tratamiento debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdTreatment, [value])
        if (res[0].length === 0) throw new Error("El tratamiento no existe")
        return true;
    }),
    body("idUser").notEmpty().withMessage("El usuario no puede estar vacio").isInt().withMessage("El id del usuario debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdUser, [value])
        if (res[0].length === 0) throw new Error("El usuario no existe")
        return true;
    }),
    body("idPet").notEmpty().withMessage("La mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe")
        return true;
    })
]