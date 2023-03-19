import { subirImagen } from './../libs/configCloudinary';
import fs from 'fs';
import { getVetsQuery, addVetQuery, updateVetQuery, findByIdVetQuery, changeStatusVetQuery, findAllByIdVetQuery } from './../libs/queries/vetQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';
import { UploadApiResponse } from 'cloudinary';

export const getVets = async(req: Request,res: Response): Promise<Response> => {
    try {

        const vetsObtained: any = await pool.query(getVetsQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los veterinarios exitosamente",
            data: vetsObtained[0]
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

export const addVet = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()){
            if (req.file){
                fs.unlink(req.file.path, (err) => {
                    console.log(err);                    
                })
            }

            return res.status(400).json({
                status: "FAILED",
                msg: err.array()[0]?.msg,
                data: err.array()
            })
        }

        if (!req.file){
            return res.status(400).json({
                status: "FAILED",
                msg: "La foto no puede estar vacio"
            })
        }

        const { nameVet, lastnameVet, dniVet, phoneVet, addressVet, emailVet, idSpecialty, idSex } = req.body;

        const imagenSubida: UploadApiResponse = await subirImagen(req.file.path);

        const addedVet: any = await pool.query(addVetQuery, [nameVet, lastnameVet, dniVet, phoneVet, addressVet, emailVet, imagenSubida.secure_url, idSpecialty, idSex])

        return res.status(201).json({
            status: "OK",
            msg: "Se registró el veterinario correctamente",
            data: addedVet[0]
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

export const updateVet = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idVet } = req.params
        const { nameVet, lastnameVet, dniVet, phoneVet, addressVet, emailVet, idSpecialty, idSex } = req.body;

        const updatedVet: any = await pool.query(updateVetQuery, [nameVet, lastnameVet, dniVet, phoneVet, addressVet, emailVet, idSpecialty, idSex, idVet])

        return res.status(201).json({
            status: "OK",
            msg: "Se actualizó el veterinario correctamente",
            data: updatedVet[0]
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

export const findByIdVet = async(req: Request,res: Response): Promise<Response> => {
    try {
        
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idVet } = req.params

        const vetObtained: any = await pool.query(findByIdVetQuery, [idVet])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo el veterinario exitosamente",
            data: vetObtained[0][0]
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

export const changeStatusVet = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const { idVet } = req.params

        const vetObtained: any = await pool.query(findAllByIdVetQuery, [idVet]);

        const changedStatus: any = await pool.query(changeStatusVetQuery, [!vetObtained[0][0].estadoVeterinario, idVet])

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