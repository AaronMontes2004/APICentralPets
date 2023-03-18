import { verifyIdProduct, verifyIdSale, verifyNumSale } from './../../libs/queriesValidation/saleDetailQueryValidation';
import pool from './../../database';
import { body, param } from 'express-validator';

export const addSaleDetailValidation = [
    body("idSale").notEmpty().withMessage("La venta no puede estar vacio").isInt().withMessage("El id de la venta debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSale, [value])
        if (res[0].length === 0) throw new Error("La venta no existe")
        return true;
    }),
    body("idProduct").notEmpty().withMessage("El producto no puede estar vacio").isInt().withMessage("El id del producto debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdProduct, [value])
        if (res[0].length === 0) throw new Error("El producto no existe")
        return true;
    }),
    body("quantityProduct").notEmpty().withMessage("La cantidad no puede estar vacio").isInt().withMessage("La cantidad debe ser un número entero").isInt({min: 0}).withMessage("La cantidad no puede ser un número negativo"),
    body("unitPriceProduct").notEmpty().withMessage("El precio unitario no puede estar vacio").isNumeric().withMessage("El precio unitario debe ser un número").custom(async(value) => {
        if (value < 0) throw new Error("El precio unitario no puede ser un número negativo")
        return true;
    }),
    body("totalPayProduct").notEmpty().withMessage("El total a pagar no puede estar vacio").isNumeric().withMessage("El total a pagar debe ser un número").custom(async(value) => {
        if (value < 0) throw new Error("El total a pagar no puede ser un número negativo")
        return true;
    })
]

export const updateSaleDetailValidation = [
    param("numSale").notEmpty().withMessage("El número de venta no puede estar vacio").isInt().withMessage("El número de venta debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyNumSale, [value])
        if (res[0].length === 0) throw new Error("El detalle de la venta no existe")
        return true;
    }),
    body("idSale").notEmpty().withMessage("La venta no puede estar vacio").isInt().withMessage("El id de la venta debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSale, [value])
        if (res[0].length === 0) throw new Error("La venta no existe")
        return true;
    }),
    body("idProduct").notEmpty().withMessage("El producto no puede estar vacio").isInt().withMessage("El id del producto debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdProduct, [value])
        if (res[0].length === 0) throw new Error("El producto no existe")
        return true;
    }),
    body("quantityProduct").notEmpty().withMessage("La cantidad no puede estar vacio").isInt().withMessage("La cantidad debe ser un número entero").isInt({min: 0}).withMessage("La cantidad no puede ser un número negativo"),
    body("unitPriceProduct").notEmpty().withMessage("El precio unitario no puede estar vacio").isNumeric().withMessage("El precio unitario debe ser un número").custom(async(value) => {
        if (value < 0) throw new Error("El precio unitario no puede ser un número negativo")
        return true;
    }),
    body("totalPayProduct").notEmpty().withMessage("El total a pagar no puede estar vacio").isNumeric().withMessage("El total a pagar debe ser un número").custom(async(value) => {
        if (value < 0) throw new Error("El total a pagar no puede ser un número negativo")
        return true;
    })
]

export const findByIdSaleDetailValidation = [
    param("numSale").notEmpty().withMessage("El número de venta no puede estar vacio").isInt().withMessage("El número de venta debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyNumSale, [value])
        if (res[0].length === 0) throw new Error("El detalle de la venta no existe")
        return true;
    })
]