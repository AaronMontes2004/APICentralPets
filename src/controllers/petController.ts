import fs from 'node:fs';
import { UploadApiResponse } from 'cloudinary';
import { subirImagen } from './../libs/configCloudinary';
import { Result } from 'express-validator';
import { validationResult } from 'express-validator';
import { getPetsQuery, addPetQuery, updatePetQuery, findByIdPetQuery, findAllByIdPetQuery, changeStatusPetQuery } from './../libs/queries/petQuery';
import pool from "./../database";
import { Request, Response } from "express";

export const getPets = async(req: Request,res: Response): Promise<Response> => {
    try {

        const petsObtained: any = await pool.query(getPetsQuery);

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las mascotas exitosamente",
            data: petsObtained[0]
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

export const addPet = async(req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) {

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

        const { namePet = "", agePet = "", sexPet = "", weightPet = "", idSpecies = "", idUser = "" } = req.body;

        console.log(req.file);

        if (!req.file){
            return res.status(400).json({
                status: "FAILED",
                msg: "La foto no puede estar vacio"
            })
        }

        const imagenSubida: UploadApiResponse = await subirImagen(req.file.path);

        const addedPet: any = await pool.query(addPetQuery, [namePet, agePet, sexPet, weightPet, imagenSubida.secure_url, idSpecies, idUser])

        return res.status(201).json({
            status: "OK",
            msg: "La mascota se registró correctamente",
            data: addedPet[0]
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

export const updatePet = async (req: Request,res: Response): Promise<Response> => {
    try {
        
        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })
        
        const { idPet } = req.params;
        const { namePet = "", agePet = "", sexPet = "", weightPet = "", idSpecies = "", idUser = "" } = req.body;

        const updatedPet: any = await pool.query(updatePetQuery,[namePet, agePet, sexPet, weightPet, idSpecies, idUser, idPet])

        return res.status(201).json({
            status: "OK",
            msg: "La mascota se actualizó correctamente",
            data: updatedPet[0]
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

export const findByIdPet = async (req: Request,res: Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })
        
        const { idPet } = req.params;

        const petObtained: any = await pool.query(findByIdPetQuery, [idPet])

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo la mascota exitosamente",
            data: petObtained[0][0]
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

export const changeStatusPet = async (req:Request, res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })
        
        const { idPet } = req.params;

        const petObtained: any = await pool.query(findAllByIdPetQuery, [idPet])

        const changedStatus: any = await pool.query(changeStatusPetQuery, [!petObtained[0][0].estadoMascota, idPet])

        return res.status(201).json({
            status: "OK",
            msg: "El estado de la mascota se cambió exitosamente",
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