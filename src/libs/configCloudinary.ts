import { v2 as cloudinary, UploadApiResponse } from "cloudinary"
import fs from "node:fs"

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});

export const subirImagen = async( ubicacionArchivo: string ) => {
    const archivoSubido: UploadApiResponse =  await cloudinary.uploader.upload(ubicacionArchivo, {
        folder: "Central-Pets",
        format: "png"
    })

    fs.unlink(ubicacionArchivo, (err) => {
        console.log(err);
    })

    return archivoSubido;
}