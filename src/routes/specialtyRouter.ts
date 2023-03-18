import { addSpecialtyValidation, changeStatusSpecialtyValidation, findByIdSpecialtyValidation, updateSpecialtyValidation } from './../middlewares/validations/specialtyValidation';
import { addSpecialty, changeStatusSpecialty, findByIdSpecialty, getSpecialties, updateSpecialty } from '../controllers/specialtyController';
import { Router } from 'express';
import passport from 'passport';

const specialtyRouter: Router = Router();

specialtyRouter.get("/", passport.authenticate("jwt", {session: false}), getSpecialties);

specialtyRouter.post("/addSpecialty", [passport.authenticate("jwt", {session: false}),addSpecialtyValidation], addSpecialty);

specialtyRouter.put("/updateSpecialty/:idSpecialty", [passport.authenticate("jwt", {session: false}),updateSpecialtyValidation], updateSpecialty)

specialtyRouter.get("/findById/:idSpecialty", findByIdSpecialtyValidation, findByIdSpecialty)

specialtyRouter.put("/changeStatus/:idSpecialty", changeStatusSpecialtyValidation, changeStatusSpecialty)

export default specialtyRouter