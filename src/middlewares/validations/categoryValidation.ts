import { verifyNameCategory, verifyIdCategory, verifyNameCategoryRepeated, verifyAllIdCategory } from './../../libs/queriesValidation/categoryQueryValidation';
import pool from "../../database";
import { body, param } from "express-validator";

export const addCategoryValidation = [
    body("nameCategory").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").custom(async(value) => {
        const res: any = await pool.query(verifyNameCategory, [value])
        if (res[0].length > 0){
            throw new Error("El nombre ya existe")
        }
        return true;
    })
]

export const updateCategoryValidation = [
    param("idCategory").notEmpty().withMessage("El id de la categoria no puede estar vacio").isInt().withMessage("El id debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdCategory, [value])
        if (res[0].length === 0){
            throw new Error("El id de la categoria no existe")
        }
        return true;
    }),
    body("nameCategory").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").custom(async(value, {req}) => {
        const res: any = await pool.query(verifyNameCategoryRepeated, [req.params?.idCategory, value])
        if (res[0].length > 0){
            throw new Error("El nombre ya existe")
        }
        return true;
    })
]

export const findByIdCategoryValidation = [
    param("idCategory").notEmpty().withMessage("El id de la categoria no puede estar vacio").isInt().withMessage("El id de la categoria debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdCategory, [value])
        if (res[0].length === 0){
            throw new Error("La categoria no existe")
        }
        return true;
    })
]

export const changeStatusCategoryValidation = [
    param("idCategory").notEmpty().withMessage("El id de la categoria no puede estar vacio").isInt().withMessage("El id de la categoria debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyAllIdCategory, [value])
        if (res[0].length === 0){
            throw new Error("La categoria no existe")
        }
        return true;
    })
]