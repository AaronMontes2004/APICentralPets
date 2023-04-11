import { addPetQuery } from './../libs/queries/petQuery';
import { subirImagen } from './../libs/configCloudinary';
import fs from 'fs';
import { getProductsQuery, addProductQuery, updateProductQuery, findByIdProductQuery, changeStatusProductQuery, findAllByIdProductQuery, updateProductAndroidQuery } from './../libs/queries/productQuery';
import pool from "./../database";
import { Request, Response } from "express";
import { Result, validationResult } from 'express-validator';
import { UploadApiResponse } from 'cloudinary';
import path from "path"

export const getProducts = async (req: Request,res: Response): Promise<Response> => {
    try {
        const productosObtained: any = await pool.query(getProductsQuery)

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvieron los productos exitosamente",
            data: productosObtained[0]
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

export const addProduct = async(req: Request,res: Response): Promise<Response> => {
    try {
        const err: Result = validationResult(req)

        if(!err.isEmpty()){

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

        const { nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand } = req.body;

        if (!req.file){
            return res.status(400).json({
                status: "FAILED",
                msg: "La foto no puede estar vacio"
            })
        }

        const imagenSubida: UploadApiResponse = await subirImagen(req.file.path);

        const addedProduct: any = await pool.query(addProductQuery, [nameProduct, descriptionProduct, stockProduct, priceProduct, imagenSubida.secure_url, idCategory, idBrand])

        return res.status(201).json({
            status: "OK",
            msg: "El producto se registró correctamente",
            data: addedProduct[0]
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

export const addProductAndroid = async( req:Request, res:Response) => {
    try {

        const err: Result = validationResult(req);

        if (!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const {nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand, photoProduct } = req.body;

        let buff = Buffer.from(photoProduct, "base64");

        let imagePath = path.join(__dirname, "../../dist/public/base64/img.png")

        await fs.writeFileSync(imagePath, buff)

        const imagenSubida: UploadApiResponse = await subirImagen(imagePath);
        
        const addedPet: any = await pool.query(addProductQuery, [nameProduct, descriptionProduct, stockProduct, priceProduct, imagenSubida.secure_url, idCategory, idBrand])

        return res.status(201).json({
            status: "OK",
            msg: "El producto se registró correctamente",
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

export const updateProduct = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req)

        if(!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const {idProduct} = req.params 
        const { nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand } = req.body;

        const updatedProduct: any = await pool.query(updateProductQuery, [nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand, idProduct])

        return res.status(201).json({
            status: "OK",
            msg: "El producto se actualizó correctamente",
            data: updatedProduct[0]
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

export const findByIdProduct = async (req: Request,res: Response) => {
    try {
        const err: Result = validationResult(req)

        if(!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const {idProduct} = req.params 

        const productObtained: any = await pool.query(findByIdProductQuery, [idProduct]);

        return res.status(200).json({
            status: "OK",
            msg: "Se obtuvo el producto exitosamente",
            data: productObtained[0][0]
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

export const changeStatusProduct = async (req: Request,res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req)

        if(!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const {idProduct} = req.params 
        
        const productObtained: any = await pool.query(findAllByIdProductQuery, [idProduct]);

        const changedStatus: any = await pool.query(changeStatusProductQuery, [!productObtained[0][0].estadoProducto, idProduct])

        return res.status(201).json({
            status: "OK",
            msg: "El estado del producto se cambió exitosamente",
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

export const updateProductAndroid = async (req: Request, res: Response): Promise<Response> => {
    try {

        const err: Result = validationResult(req)

        if(!err.isEmpty()) return res.status(400).json({
            status: "FAILED",
            msg: err.array()[0]?.msg,
            data: err.array()
        })

        const {idProduct} = req.params 
        const { nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand, photoProduct } = req.body;

        let updatedProduct: any = null

        if (photoProduct){
            let buff = Buffer.from(photoProduct, "base64");

            let imagePath = path.join(__dirname, "../../dist/public/base64/img.png")

            await fs.writeFileSync(imagePath, buff)

            const imagenSubida: UploadApiResponse = await subirImagen(imagePath);

            updatedProduct = await pool.query(updateProductAndroidQuery, [nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand, imagenSubida.secure_url, idProduct])
        } else {
            updatedProduct = await pool.query(updateProductQuery, [nameProduct, descriptionProduct, stockProduct, priceProduct, idCategory, idBrand, idProduct])
        }

        return res.status(201).json({
            status: "OK",
            msg: "El producto se actualizó correctamente",
            data: updatedProduct[0]
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