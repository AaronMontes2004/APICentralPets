import { changeStatusUser, findByEmailUser, findByIdUser, getUsers, loginUser, signupUser, verifyToken } from "../controllers/userController";
import { Router } from "express";
import { changeStatusUserValidation, findByEmailUserValidation, findByIdUserValidation, loginUserValidation, signupUserValidation } from "../middlewares/validations/userValidation";
import passport from "passport";

const userRouter: Router = Router();

userRouter.get("/", getUsers)

userRouter.post("/login", loginUserValidation, loginUser)

userRouter.post("/signup", signupUserValidation, signupUser)

userRouter.get("/findById/:idUser", findByIdUserValidation, findByIdUser)

userRouter.put("/changeStatus/:idUser", changeStatusUserValidation, changeStatusUser)

userRouter.get("/findByEmail/:emailUser", findByEmailUserValidation, findByEmailUser)

userRouter.get("/verifyToken", passport.authenticate("jwt", {session: false}) , verifyToken)

export default userRouter;