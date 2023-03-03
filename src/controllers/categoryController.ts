import { getCategoriesQuery, addCategoryQuery, updateCategoryQuery } from './../libs/queries/categoryQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';

export const getCategories = async (req: Request,res: Response): Promise<Response> => {
    try {

        const categoriesObtained: any = await pool.query(getCategoriesQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron las categorias exitosamente",
            data: categoriesObtained[0]
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

export const addCategory = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })
       
        const { nameCategory } = req.body;

        const addedCategory: any = await pool.query(addCategoryQuery, [nameCategory]);

        return res.status(201).jsonp({
            status: "OK",
            msg: "La categoria se registró exitosamente",
            data: addedCategory[0]
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

export const updateCategory = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })
       
        const { idCategory } = req.params;
        const { nameCategory } = req.body;

        const updatedCategory: any = await pool.query(updateCategoryQuery, [nameCategory, idCategory])

        return res.status(201).json({
            status: "OK",
            msg: "La categoria se actualizó exitosamente",
            data: updatedCategory[0]
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