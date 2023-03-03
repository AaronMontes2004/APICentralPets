import { verifyIdSpecies, verifyNameSpecies, verifyNameSpeciesRepeated } from './../../libs/queriesValidation/speciesQueryValidation';
import pool from "../../database";
import { body, param } from "express-validator";

export const addSpeciesValidation = [
    body("nameSpecies").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("La especie debe ser un texto").custom(async(value) => {
        const res: any = await pool.query(verifyNameSpecies, [value])
        if (res[0].length > 0){
            throw new Error("El nombre ya existe");
        }
        return true;
    })
]

export const updateSpeciesValidation = [
    param("idSpecies").notEmpty().withMessage("El id de la especie no puede estar vacio").isInt().withMessage("El id debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSpecies, [value]);
        if (res[0].length === 0){
            throw new Error("El id de la especie no existe")
        }
        return true;
    }),
    body("nameSpecies").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("La especie debe ser un texto").custom(async(value, {req}) => {
        const res: any = await pool.query(verifyNameSpeciesRepeated, [req.params?.idSpecies, value])
    })
]