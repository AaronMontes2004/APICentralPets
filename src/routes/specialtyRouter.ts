import { addSpecialtyValidation, updateSpecialtyValidation } from './../middlewares/validations/specialtyValidation';
import { addSpecialty, getSpecialties, updateSpecialty } from '../controllers/specialtyController';
import { Router } from 'express';
import passport from 'passport';

const specialtyRouter: Router = Router();

specialtyRouter.get("/", passport.authenticate("jwt", {session: false}), getSpecialties);

specialtyRouter.post("/addSpecialty", [passport.authenticate("jwt", {session: false}),addSpecialtyValidation], addSpecialty);

specialtyRouter.put("/updateSpecialty/:idSpecialty", [passport.authenticate("jwt", {session: false}),updateSpecialtyValidation], updateSpecialty)

export default specialtyRouter