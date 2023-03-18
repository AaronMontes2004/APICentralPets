import { verifyIdSale, verifyIdUser } from './../../libs/queriesValidation/saleQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator"

export const addSaleValidation = [
    body("idUser").if((value: any) => { if (value) return true}).isInt().withMessage("El id del usuario debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdUser, [value])
        if (res[0].length === 0) throw new Error("El usuario no existe")
        return true;
    })
]

export const updateSaleValidation = [
    param("idSale").notEmpty().withMessage("El id de la venta no puede estar vacio").isInt().withMessage("El id de la venta debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSale, [value])
        if (res[0].length === 0) throw new Error("La venta no existe")
        return true;
    }),
    body("idUser").if((value: any) => { if (value) return true}).isInt().withMessage("El id del usuario debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdUser, [value])
        if (res[0].length === 0) throw new Error("El usuario no existe")
        return true;
    })
]

export const findByIdSaleValidation = [
    param("idSale").notEmpty().withMessage("El id de la venta no puede estar vacio").isInt().withMessage("El id de la venta debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSale, [value])
        if (res[0].length === 0) throw new Error("La venta no existe")
        return true;
    })
]