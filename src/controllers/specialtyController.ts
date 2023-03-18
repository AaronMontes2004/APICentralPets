import { changeStatusSpecialtyQuery, findAllByIdSpecialtyQuery } from './../libs/queries/specialtyQuery';
import pool from "../database";
import { Request, Response } from "express";
import { getSpecialtiesQuery, addSpecialtyQuery, updateSpecialtyQuery, findByIdSpecialtyQuery } from "../libs/queries/specialtyQuery";
import { Result, validationResult } from "express-validator";

export const getSpecialties = async (req: Request,res: Response): Promise<Response> => {
    try {
        const specialtiesList: any = await pool.query(getSpecialtiesQuery);

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las especialidades exitosamente",
            data: specialtiesList[0]
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

export const addSpecialty = async (req: Request,res: Response): Promise<Response> => {
    try {
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { nameSpecialty, descriptionSpecialty } = req.body;

        const addedSpecialty: any = await pool.query(addSpecialtyQuery, [nameSpecialty, descriptionSpecialty]);

        return res.status(201).json({
            status: "OK",
            msg: "La especialidad fue registrada",
            data: addedSpecialty[0]
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

export const updateSpecialty = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSpecialty } = req.params;
        const { nameSpecialty, descriptionSpecialty } = req.body;

        const updatedSpecialty: any = await pool.query(updateSpecialtyQuery, [nameSpecialty, descriptionSpecialty, idSpecialty])

        return res.status(201).json({
            status: "OK",
            msg: "La especialidad fue actualizada con éxito",
            data: updatedSpecialty[0]
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

export const findByIdSpecialty = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSpecialty } = req.params;

        const specialtyObtained: any = await pool.query(findByIdSpecialtyQuery, [idSpecialty])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo la especialidad exitosamente",
            data: specialtyObtained[0][0]
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

export const changeStatusSpecialty = async(req:Request, res:Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSpecialty } = req.params;

        const specialtyObtained: any = await pool.query(findAllByIdSpecialtyQuery, [idSpecialty])

        const changedStatus: any = await pool.query(changeStatusSpecialtyQuery, [!specialtyObtained[0][0].estadoEspecialidad, idSpecialty])

        return res.status(201).json({
            status: "OK",
            msg: "El estado de la especialidad se cambió exitosamente",
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