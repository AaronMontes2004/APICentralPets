import { subirImagen } from './../libs/configCloudinary';
import fs from 'node:fs';
import { getVetsQuery, addVetQuery, updateVetQuery } from './../libs/queries/vetQuery';
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

        const { nameVet, lastnameVet, dniVet, phoneVet, addressVet, sexVet, emailVet, idSpecialty } = req.body;

        const imagenSubida: UploadApiResponse = await subirImagen(req.file.path);

        const addedVet: any = await pool.query(addVetQuery, [nameVet, lastnameVet, dniVet, phoneVet, addressVet, sexVet, emailVet, imagenSubida.secure_url, idSpecialty])

        return res.status(201).json({
            status: "OK",
            msg: "Se registr?? el veterinario correctamente",
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
        const { nameVet, lastnameVet, dniVet, phoneVet, addressVet, sexVet, emailVet, idSpecialty } = req.body;

        const updatedVet: any = await pool.query(updateVetQuery, [nameVet, lastnameVet, dniVet, phoneVet, addressVet, sexVet, emailVet, idSpecialty, idVet])

        return res.status(201).json({
            status: "OK",
            msg: "Se actualiz?? el veterinario correctamente",
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