import { verifyIdCategory, verifyNameProduct, verifyIdProduct, verifyNameProductRepeat } from './../../libs/queriesValidation/productQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addProductValidation = [
    body("nameProduct").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").isLength({max: 200}).withMessage("El nombre debe tener menos de 200 caracteres").custom(async(value) => {
        const res: any = await pool.query(verifyNameProduct, [value])
        if (res[0].length > 0) throw new Error("El nombre ya existe")
        return true;
    }),
    body("descriptionProduct").notEmpty().withMessage("La descripción no puede estar vacia").isString().withMessage("La descripción debe ser un texto").isLength({max: 500}).withMessage("La descripción debe tener menos de 500 caracteres"),
    body("stockProduct").notEmpty().withMessage("El stock no puede estar vacio").isInt().withMessage("El stock debe ser un entero").custom((value) => {
        if (value < 0) throw new Error("El stock no puede ser números negativos")
        return true;
    }),
    body("priceProduct").notEmpty().withMessage("El precio no puede estar vacio").isNumeric().withMessage("El precio debe ser en números").custom((value) => {
        if (value < 0) throw new Error("El precio no puede ser números negativos")
        return true;
    }),
    body("idCategory").notEmpty().withMessage("La categoria no puede estar vacio").isInt().withMessage("El id de la categoria debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdCategory, [value])
        if (res[0].length === 0) throw new Error("La categoria no existe")
        return true;
    })
]

export const updateProductValidation = [
    param("idProduct").notEmpty().withMessage("El id del producto no puede estar vacio").isInt().withMessage("El id debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdProduct, [value])
        if (res[0].length === 0) throw new Error("El producto no existe")
        return true;
    }),
    body("nameProduct").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").isLength({max: 200}).withMessage("El nombre debe tener menos de 200 caracteres").custom(async(value, {req}) => {
        const res: any = await pool.query(verifyNameProductRepeat, [req.params?.idProduct,value])
        if (res[0].length > 0) throw new Error("El nombre ya existe")
        return true;
    }),
    body("descriptionProduct").notEmpty().withMessage("La descripción no puede estar vacia").isString().withMessage("La descripción debe ser un texto").isLength({max: 500}).withMessage("La descripción debe tener menos de 500 caracteres"),
    body("stockProduct").notEmpty().withMessage("El stock no puede estar vacio").isInt().withMessage("El stock debe ser un entero").custom((value) => {
        if (value < 0) throw new Error("El stock no puede ser números negativos")
        return true;
    }),
    body("priceProduct").notEmpty().withMessage("El precio no puede estar vacio").isNumeric().withMessage("El precio debe ser en números").custom((value) => {
        if (value < 0) throw new Error("El precio no puede ser números negativos")
        return true;
    }),
    body("idCategory").notEmpty().withMessage("La categoria no puede estar vacio").isInt().withMessage("El id de la categoria debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdCategory, [value])
        if (res[0].length === 0) throw new Error("La categoria no existe")
        return true;
    })
]