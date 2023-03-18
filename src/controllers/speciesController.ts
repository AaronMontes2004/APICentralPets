import { Result, validationResult } from 'express-validator';
import { getSpeciesQuery, addSpeciesQuery, updateSpeciesQuery, findByIdSpeciesQuery, findAllByIdSpeciesQuery, changeStatusSpeciesQuery } from './../libs/queries/speciesQuery';
import pool from "../database";
import { Request, Response } from "express";


export const getSpecies = async(req: Request,res: Response): Promise<Response> => {
    try {
        const speciesObtained: any = await pool.query(getSpeciesQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Especies obtenidas exitosamente",
            data: speciesObtained[0]
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

export const addSpecies = async(req: Request,res: Response): Promise<Response> => {
    try {
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { nameSpecies } = req.body;

        const addedSpecies: any = await pool.query(addSpeciesQuery, [nameSpecies]);

        return res.status(201).json({
            status: "OK",
            msg: "La especie se registró exitosamente",
            data: addedSpecies[0]
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const updateSpecies = async (req: Request,res: Response): Promise<Response> => {
    try {
        
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSpecies } = req.params;
        const { nameSpecies } = req.body;

        const updatedSpecies: any = await pool.query(updateSpeciesQuery, [nameSpecies, idSpecies]);

        return res.status(201).json({
            status: "OK",
            msg: "La especie se actualizó exitosamente",
            data: updatedSpecies[0]
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}

export const findByIdSpecies = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSpecies } = req.params;

        const speciesObtained: any = await pool.query(findByIdSpeciesQuery, [idSpecies])

        return res.status(201).json({
            status: "OK",
            msg: "Se obtuvo la especie exitosamente",
            data: speciesObtained[0][0]
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

export const changeStatusSpecies = async (req:Request, res:Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idSpecies } = req.params;

        const speciesObtained: any = await pool.query(findAllByIdSpeciesQuery, [idSpecies])

        const changedStatus: any = await pool.query(changeStatusSpeciesQuery, [!speciesObtained[0][0].estadoEspecie, idSpecies])

        return res.status(201).json({
            status: "OK",
            msg: "El estado de la especie se cambió exitosamente",
            data: changedStatus
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