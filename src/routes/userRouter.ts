import { changeStatusUser, findByEmailUser, findByIdUser, getUsers, loginUser, signupUser } from "../controllers/userController";
import { Router } from "express";
import { changeStatusUserValidation, findByEmailUserValidation, findByIdUserValidation, loginUserValidation, signupUserValidation } from "../middlewares/validations/userValidation";

const userRouter: Router = Router();

userRouter.get("/", getUsers)

userRouter.post("/login", loginUserValidation, loginUser)

userRouter.post("/signup", signupUserValidation, signupUser)

userRouter.get("/findById/:idUser", findByIdUserValidation, findByIdUser)

userRouter.put("/changeStatus/:idUser", changeStatusUserValidation, changeStatusUser)

userRouter.get("/findByEmail/:emailUser", findByEmailUserValidation, findByEmailUser)

export default userRouter;