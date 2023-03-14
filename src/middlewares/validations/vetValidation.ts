import { verifyDNIVet, verifyDNIVetRepeat, verifyEmailVet, verifyEmailVetRepeat, verifyIdSex, verifyIdSpecialty, verifyIdVet } from './../../libs/queriesValidation/vetQueryValidation';
import pool from "./../../database";
import { body, param } from "express-validator";

export const addVetValidation = [
    body("nameVet").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").isLength({max: 250}).withMessage("El nombre debe tener menos de 250 caracteres"),
    body("lastnameVet").notEmpty().withMessage("El apellido no puede estar vacio").isString().withMessage("El apellido debe ser un texto").isLength({max: 250}).withMessage("El apellido debe tener menos de 250 caracteres"),
    body("dniVet").notEmpty().withMessage("El dni no puede estar vacio").isInt().withMessage("El dni debe ser solo números").isLength({min: 8, max: 8}).withMessage("El dni debe tener 8 caracteres").custom(async(value) => {
        const res: any = await pool.query(verifyDNIVet, [value])
        if (res[0].length > 0) throw new Error("El dni ya existe")
        return true;
    }),
    body("phoneVet").notEmpty().withMessage("El telefono no puede estar vacio").isInt().withMessage("El telefono debe ser número enteros"),
    body("addressVet").notEmpty().withMessage("La dirección no puede estar vacio").isString().withMessage("La dirección debe ser un texto").isLength({max: 250}).withMessage("La dirección debe tener menos de 250 caracteres"),
    body("emailVet").notEmpty().withMessage("El email no puede estar vacio").isEmail().withMessage("El correo no tiene el formato indicado").custom(async(value) => {
        const res: any = await pool.query(verifyEmailVet, [value])
        if (res[0].length > 0) throw new Error("El email ya está en uso")
        return true;
    }),
    body("idSpecialty").notEmpty().withMessage("La especialidad no puede estar vacia").isInt().withMessage("El id de la especialidad debe ser un entero").custom(async(value) => {
        const res:any = await pool.query(verifyIdSpecialty, [value]);
        if (res[0].length === 0) throw new Error("La especialidad no existe")
        return true;
    }),
    body("idSex").notEmpty().withMessage("El sexo no puede estar vacio").isInt().withMessage("El sexo debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSex, [value])
        if (res[0].length === 0) throw new Error("El sexo ingresado no existe")
        return true;
    })
]

export const updateVetValidation = [
    param("idVet").notEmpty().withMessage("El id del veterinario no puede estar vacio").isInt().withMessage("El id del veterinario debe ser un entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdVet, [value])
        if (res[0].length === 0) throw new Error("El veterinario no existe")
        return true
    }),
    body("nameVet").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre debe ser un texto").isLength({max: 250}).withMessage("El nombre debe tener menos de 250 caracteres"),
    body("lastnameVet").notEmpty().withMessage("El apellido no puede estar vacio").isString().withMessage("El apellido debe ser un texto").isLength({max: 250}).withMessage("El apellido debe tener menos de 250 caracteres"),
    body("dniVet").notEmpty().withMessage("El dni no puede estar vacio").isInt().withMessage("El dni debe ser solo números").isLength({min: 8, max: 8}).withMessage("El dni debe tener 8 caracteres").custom(async(value, {req}) => {
        const res: any = await pool.query(verifyDNIVetRepeat, [ req.params?.idVet, value])
        if (res[0].length > 0) throw new Error("El dni ya existe")
        return true;
    }),
    body("phoneVet").notEmpty().withMessage("El telefono no puede estar vacio").isInt().withMessage("El telefono debe ser número enteros"),
    body("addressVet").notEmpty().withMessage("La dirección no puede estar vacio").isString().withMessage("La dirección debe ser un texto").isLength({max: 250}).withMessage("La dirección debe tener menos de 250 caracteres"),
    body("emailVet").notEmpty().withMessage("El email no puede estar vacio").isEmail().withMessage("El correo no tiene el formato indicado").custom(async(value, { req }) => {
        const res: any = await pool.query(verifyEmailVetRepeat, [ req.params?.idVet, value])
        if (res[0].length > 0) throw new Error("El email ya está en uso")
        return true;
    }),
    body("idSpecialty").notEmpty().withMessage("La especialidad no puede estar vacia").isInt().withMessage("El id de la especialidad debe ser un entero").custom(async(value) => {
        const res:any = await pool.query(verifyIdSpecialty, [value]);
        if (res[0].length === 0) throw new Error("La especialidad no existe")
        return true;
    }),
    body("idSex").notEmpty().withMessage("El sexo no puede estar vacio").isInt().withMessage("El sexo debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSex, [value])
        if (res[0].length === 0) throw new Error("El sexo ingresado no existe")
        return true;
    })
]