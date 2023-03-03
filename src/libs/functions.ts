import bcrypt from "bcryptjs"
import { NextFunction, Request, Response } from "express";

export const encryptPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, await bcrypt.genSalt(10));
}

export const comparePassowrd = async (password: string, passwordEncrypted: string): Promise<boolean> => {
    return await bcrypt.compare(password, passwordEncrypted);
}

/* export const verifyRolUser  = (req: Request,res: Response,next: NextFunction) => {
    const {  } = req.body;
} */