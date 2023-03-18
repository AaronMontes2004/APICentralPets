import { verifyNameSpecialty, verifyNameSpecialtyRepeated, verifyIdSpecialty, verifyAllIdSpecialty } from './../../libs/queriesValidation/specialtyQueryValidation';
import pool from "../../database";
import { body, param } from "express-validator";

export const addSpecialtyValidation = [
    body("nameSpecialty").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").custom(async(value) => {
        const res: any = await pool.query(verifyNameSpecialty, [value])
        if (res[0].length > 0){
            throw new Error("El nombre ya existe")
        }
        return true;
    }),
    body("descriptionSpecialty").notEmpty().withMessage("La descripción no puede estar vacio").isString().withMessage("La descripción debe ser un texto")
];

export const updateSpecialtyValidation = [
    param("idSpecialty").notEmpty().withMessage("El id de la especialidad no puede estar vacio").isInt().withMessage("El id de la especialidad debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSpecialty, [value]);
        if (res[0].length === 0){
            throw new Error("La especialidad no existe")
        }
        return true;
    }),
    body("nameSpecialty").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").custom(async(value, {req}) => {
        const res: any = await pool.query(verifyNameSpecialtyRepeated, [req.params?.idSpecialty ,value])
        if (res[0].length > 0){
            throw new Error("El nombre ya existe")
        }
        return true;
    }),
    body("descriptionSpecialty").notEmpty().withMessage("La descripción no puede estar vacio").isString().withMessage("La descripción debe ser un texto")
]

export const findByIdSpecialtyValidation = [
    param("idSpecialty").notEmpty().withMessage("El id de la especialidad no puede estar vacio").isInt().withMessage("El id de la especialidad debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSpecialty, [value]);
        if (res[0].length === 0){
            throw new Error("La especialidad no existe")
        }
        return true;
    })
]

export const changeStatusSpecialtyValidation = [
    param("idSpecialty").notEmpty().withMessage("El id de la especialidad no puede estar vacio").isInt().withMessage("El id de la especialidad debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyAllIdSpecialty, [value]);
        if (res[0].length === 0){
            throw new Error("La especialidad no existe")
        }
        return true;
    })
]