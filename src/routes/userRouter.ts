import { getUsers, loginUser, signupUser } from "../controllers/userController";
import { Router } from "express";
import { loginUserValidation, signupUserValidation } from "../middlewares/validations/userValidation";

const userRouter: Router = Router();

userRouter.get("/", getUsers)

userRouter.post("/login", loginUserValidation, loginUser)

userRouter.post("/signup", signupUserValidation, signupUser)

export default userRouter;