import { verifyIdUser, verifyIdSpecies, verifyIdPet, verifyAllIdPet } from './../../libs/queriesValidation/petQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addPetValidation = [
    body("namePet").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto"),
    body("agePet").notEmpty().withMessage("La edad no puede estar vacio").isInt().withMessage("La edad debe ser un entero").custom((value) => {
        if (value < 0){
            throw new Error("La edad no puede ser negativa")
        }
        return true;
    }),
    body("sexPet").notEmpty().withMessage("El sexo no puede estar vacio").isString().withMessage("El sexo debe ser un texto").custom((value: string) => {
        if (value.toUpperCase() === "MACHO" || value.toUpperCase() === "HEMBRA"){
            return true;
        }
        throw new Error("El sexo solo puede ser macho o hembra")
    }),
    body("weightPet").notEmpty().withMessage("El peso no puede estar vacio").isNumeric().withMessage("El peso debe ser un número").custom((value) => {
        if (value < 0){
            throw new Error("El peso no puede ser negativo")
        }
        return true;
    }),
    body("idSpecies").notEmpty().withMessage("La especie no puede estar vacio").isInt().withMessage("El id de la especie debe ser un entero").custom(async(value) => {
        const speciesObtained: any = await pool.query(verifyIdSpecies, [value])
        if (speciesObtained[0].length > 0){
            return true;
        }
        throw new Error("La especie no existe")
    }),
    body("idUser").notEmpty().withMessage("El usuario no puede estar vacio").isInt().withMessage("El id del usuario debe ser un entero").custom(async(value) => {
        const userObtained: any = await pool.query(verifyIdUser, [value])
        if (userObtained[0].length > 0){
            return true;
        }
        throw new Error("El usuario no existe")
    })
] 

export const addPetValidationAndroid = [
    body("namePet").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto"),
    body("agePet").notEmpty().withMessage("La edad no puede estar vacio").isInt().withMessage("La edad debe ser un entero").custom((value) => {
        if (value < 0){
            throw new Error("La edad no puede ser negativa")
        }
        return true;
    }),
    body("sexPet").notEmpty().withMessage("El sexo no puede estar vacio").isString().withMessage("El sexo debe ser un texto").custom((value: string) => {
        if (value.toUpperCase() === "MACHO" || value.toUpperCase() === "HEMBRA"){
            return true;
        }
        throw new Error("El sexo solo puede ser macho o hembra")
    }),
    body("weightPet").notEmpty().withMessage("El peso no puede estar vacio").isNumeric().withMessage("El peso debe ser un número").custom((value) => {
        if (value < 0){
            throw new Error("El peso no puede ser negativo")
        }
        return true;
    }),
    body("idSpecies").notEmpty().withMessage("La especie no puede estar vacio").isInt().withMessage("El id de la especie debe ser un entero").custom(async(value) => {
        const speciesObtained: any = await pool.query(verifyIdSpecies, [value])
        if (speciesObtained[0].length > 0){
            return true;
        }
        throw new Error("La especie no existe")
    }),
    body("idUser").notEmpty().withMessage("El usuario no puede estar vacio").isInt().withMessage("El id del usuario debe ser un entero").custom(async(value) => {
        const userObtained: any = await pool.query(verifyIdUser, [value])
        if (userObtained[0].length > 0){
            return true;
        }
        throw new Error("El usuario no existe")
    }),
    body("photoPet").notEmpty().withMessage("La imagen no puede estar vacio")//.isBase64().withMessage("La imagen debe ser en formato base64")
] 

export const updatePetValidation = [
    param("idPet").notEmpty().withMessage("El id de la mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe")
        return true;
    }),
    body("namePet").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto"),
    body("agePet").notEmpty().withMessage("La edad no puede estar vacio").isInt().withMessage("La edad debe ser un entero").custom((value) => {
        if (value < 0){
            throw new Error("La edad no puede ser negativa")
        }
        return true;
    }),
    body("sexPet").notEmpty().withMessage("El sexo no puede estar vacio").isString().withMessage("El sexo debe ser un texto").custom((value: string) => {
        if (value.toUpperCase() === "MACHO" || value.toUpperCase() === "HEMBRA"){
            return true;
        }
        throw new Error("El sexo solo puede ser macho o hembra")
    }),
    body("weightPet").notEmpty().withMessage("El peso no puede estar vacio").isNumeric().withMessage("El peso debe ser un número").custom((value) => {
        if (value < 0){
            throw new Error("El peso no puede ser negativo")
        }
        return true;
    }),
    body("idSpecies").notEmpty().withMessage("La especie no puede estar vacio").isInt().withMessage("El id de la especie debe ser un entero").custom(async(value) => {
        const speciesObtained: any = await pool.query(verifyIdSpecies, [value])
        if (speciesObtained[0].length > 0){
            return true;
        }
        throw new Error("La especie no existe")
    }),
    body("idUser").notEmpty().withMessage("El usuario no puede estar vacio").isInt().withMessage("El id del usuario debe ser un entero").custom(async(value) => {
        const userObtained: any = await pool.query(verifyIdUser, [value])
        if (userObtained[0].length > 0){
            return true;
        }
        throw new Error("El usuario no existe")
    })
]

export const findByIdPetValidation = [
    param("idPet").notEmpty().withMessage("El id de la mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe")
        return true;
    })
]

export const changeStatusPetValidation = [
    param("idPet").notEmpty().withMessage("El id de la mascota no puede estar vacio").isInt().withMessage("El id de la mascota debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyAllIdPet, [value])
        if (res[0].length === 0) throw new Error("La mascota no existe")
        return true;
    })
]

export const findPetByIdUserValidation = [
    param("idUser").notEmpty().withMessage("El id del usuario no puede estar vacio").isInt().withMessage("El id del usuario debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdUser, [value])
        if (res[0].length === 0) throw new Error("El usuario no existe")
        return true;
    })
]