import { Request } from "express"
import multer, { Multer } from "multer"

const storage = multer.diskStorage({
    destination: (req: Request,file: Express.Multer.File ,cb) => {
        console.log("aea");
        cb(null, "./src/public/img")
    },
    filename: (req: Request,file: Express.Multer.File,cb) => {
        console.log(file, " aaa ");
        const uniqueSuffix: string = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + ".png")
    }
})

const upload: Multer = multer({storage: storage})

export default upload;