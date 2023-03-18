import { findByIdUser, getUsers, loginUser, signupUser } from "../controllers/userController";
import { Router } from "express";
import { findByIdUserValidation, loginUserValidation, signupUserValidation } from "../middlewares/validations/userValidation";

const userRouter: Router = Router();

userRouter.get("/", getUsers)

userRouter.post("/login", loginUserValidation, loginUser)

userRouter.post("/signup", signupUserValidation, signupUser)

userRouter.get("/findById/:idUser", findByIdUserValidation, findByIdUser)

export default userRouter;