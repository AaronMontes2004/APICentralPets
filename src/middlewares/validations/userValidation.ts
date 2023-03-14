import { verifyCellPhoneUser, verifyDNIUser, verifyIdSex } from './../../libs/queriesValidation/userQueryValidation';
import { comparePassowrd } from './../../libs/functions';
import pool from "../../database"
import { body } from "express-validator"
import { verifyEmailUser, verifyUserUser } from "../../libs/queriesValidation/userQueryValidation"
import { loginUserQuery } from "../../libs/queries/userQuery"

export const loginUserValidation = [
    body("emailUser").notEmpty().withMessage("El correo electrónico no puede estar vacio").isEmail().withMessage("El correo electrónico no tiene el formato correcto").custom(async(value) => {
        const res:any = await pool.query(loginUserQuery, [value])
        if (res[0].length === 0){
            throw new Error("El correo electrónigo ingresado no existe")
        }
        return true;
    }),
    body("passwordUser").notEmpty().withMessage("La contraseña no puede estar vacio").custom(async(value, {req}) => {
        const res:any = await pool.query(loginUserQuery, [req.body.emailUser])
        if (!await comparePassowrd(value, res[0][0].contrasenaUsuario)){
            throw new Error("La contraseña es incorrecta")
        }
        return true;
    })
]

export const signupUserValidation = [
    body("nameUser").notEmpty().withMessage("El nombre no puede estar vacio").isString().withMessage("El nombre de usuario debe ser un texto"),
    body("lastnameUser").notEmpty().withMessage("El apellido no puede estar vacio").isString().withMessage("El apellido debe ser un texto"),
    body("userUser").notEmpty().withMessage("El usuario no puede estar vacio").isString().withMessage("El usuario debe ser un texto").custom(async(value) => {
        const res: any = await pool.query(verifyUserUser, [value])
        if (res[0].length > 0){
            throw new Error("El usuario ya está en uso")
        }
        return true;
    }),
    body("emailUser").notEmpty().withMessage("El correo electrónico no puede estar vacio").isEmail().withMessage("El correo electrónico no tiene el formato correcto").custom(async(value) => {
        const res: any = await pool.query(verifyEmailUser, [value])
        if (res[0].length > 0){
            throw new Error("El correo electrónico ya está en uso")
        }
        return true;
    }),
    body("passwordUser").notEmpty().withMessage("La contraseña no puede estar vacio").isStrongPassword().withMessage("La contraseña debe tener minúsculas, mayúsculas, numeros y caracteres especiales"),
    body("cellphoneUser").notEmpty().withMessage("El celular no puede estar vacio").isInt().withMessage("El celular debe tener solo números").custom(async(value) => {
        const res: any = await pool.query(verifyCellPhoneUser, [value])
        if (res[0].length > 0) throw new Error("El número de celular ya está en uso")
        return true;
    }),
    body("addressUser").notEmpty().withMessage("La dirección no puede estar vacio").isString().withMessage("La dirección debe ser un texto"),
    body("dniUser").notEmpty().withMessage("El DNI no puede estar vacio").isInt().withMessage("El DNI debe tener solo números").custom(async(value) => {
        const res: any = await pool.query(verifyDNIUser, [value])
        if (res[0].length > 0) throw new Error("El dni ya está en uso")
        return true;
    }),
    body("idSex").notEmpty().withMessage("El sexo no puede estar vacio").isInt().withMessage("El sexo debe ser un número entero").custom(async(value) => {
        const res: any = await pool.query(verifyIdSex, [value])
        if (res[0].length === 0) throw new Error("El sexo ingresado no existe")
        return true;
    })
]