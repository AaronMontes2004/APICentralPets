import { addVetValidation, findByIdVetValidation, updateVetValidation } from './../middlewares/validations/vetValidation';
import { getVets, addVet, updateVet, findByIdVet } from './../controllers/vetController';
import { Router } from 'express';
import upload from './../libs/configMulter';

const vetRouter: Router = Router();

vetRouter.get("/", getVets)

vetRouter.post("/addVet", upload.single("photoVet"), addVetValidation, addVet)

vetRouter.put("/updateVet/:idVet", updateVetValidation, updateVet)

vetRouter.get("/findById/:idVet", findByIdVetValidation, findByIdVet)

export default vetRouter