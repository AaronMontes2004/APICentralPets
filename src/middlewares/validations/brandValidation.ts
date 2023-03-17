import { verifyIdBrand, verifyNameBrand } from './../../libs/queriesValidation/brandQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addBrandValidation = [
    body("nameBrand").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").custom(async(value) => {
        const res: any = await pool.query(verifyNameBrand, [value])
        if (res[0].length > 0) throw new Error("El nombre ya existe")
        return true;
    })
]

export const updateBrandValidation = [
    param("idBrand").notEmpty().withMessage("El id de la marca no puede estar vacio").isInt().withMessage("El id de la marca debe ser un número entero").custom(async(value) => {
        const res:any = await pool.query(verifyIdBrand, [value])
        if (res[0].length === 0) throw new Error("La marca no existe")
        return true;
    }),
    body("nameBrand").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").custom(async(value) => {
        const res: any = await pool.query(verifyNameBrand, [value])
        if (res[0].length > 0) throw new Error("El nombre ya existe")
        return true;
    })
]