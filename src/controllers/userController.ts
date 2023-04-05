import { verifyEmailUser } from './../libs/queriesValidation/userQueryValidation';
import { Result } from 'express-validator';
import pool from "../database";
import { Request, Response } from "express";
import { encryptPassword } from "../libs/functions";
import { validationResult } from "express-validator/src/validation-result";
import { changeStatusUserQuery, findAllByIdUserQuery, findByEmailUserQuery, findByIdUserQuery, getUsersQuery, signupUserQuery } from '../libs/queries/userQuery';
import jwt from "jsonwebtoken";

export const getUsers = async (req: Request,res: Response) => {
    try {
        const userList: any = await pool.query(getUsersQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los usuarios exitosamente",
            data: userList[0]
        })

    } catch (error) {
        console.log();
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })  

        const userFound: any = await pool.query(verifyEmailUser, [req.body?.emailUser]);

        const token: string = jwt.sign({id: userFound[0][0].idUsuario}, process.env.JWT_SECRET || "central_pets", {expiresIn: "7d"})

        const obtainedUser: any = await pool.query(findByIdUserQuery, [userFound[0][0].idUsuario]) 
        
        return res.status(200).json({
            status: "OK",
            msg: "Ingresó al sistema exitosamente",
            user: obtainedUser[0][0],
            token: token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const signupUser = async (req: Request,res: Response): Promise<Response> => {

    try {
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { nameUser, lastnameUser, userUser, emailUser, passwordUser, cellphoneUser, addressUser, dniUser, idSex } = req.body;

        const encryptedPassword: string = await encryptPassword(passwordUser);

        const addedUser: any = await pool.query(signupUserQuery, [nameUser, lastnameUser, userUser, emailUser, encryptedPassword, cellphoneUser, addressUser, dniUser, idSex]) 
        console.log(addedUser);

        const token: string = jwt.sign({id: addedUser[0].insertId}, process.env.JWT_SECRET || "central_pets", {expiresIn: "7d"})

        const obtainedUser: any = await pool.query(findByIdUserQuery, [addedUser[0].insertId])

        return res.status(201).json({
            status: "OK",
            msg: "Fué registrado exitosamente",
            data: addedUser[0],
            user: obtainedUser[0][0],
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const findByIdUser = async(req: Request, res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idUser } = req.params;

        const userObtained: any = await pool.query(findByIdUserQuery, [idUser])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo el usuario exitosamente",
            data: userObtained[0][0]
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const changeStatusUser = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idUser } = req.params;

        const userObtained: any = await pool.query(findAllByIdUserQuery, [idUser]);

        const changedStatus: any = await pool.query(changeStatusUserQuery, [!userObtained[0][0].estadoUsuario, idUser])

        return res.status(201).json({
            status: "OK",
            msg: "El estado del veterinario se cambió exitosamente",
            data: changedStatus[0]
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const findByEmailUser = async (req:Request, res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { emailUser } = req.params;

        const obtainedUser: any = await pool.query(findByEmailUserQuery, [emailUser])

        return res.status(201).json({
            status: "OK",
            msg: "Se obtuvo el usuario correctamente",
            data: obtainedUser[0]
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const verifyToken = (req: Request, res: Response) => {
    try {
        res.status(200).send("Authorized")
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}