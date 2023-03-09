import { addVetValidation, updateVetValidation } from './../middlewares/validations/vetValidation';
import { getVets, addVet, updateVet } from './../controllers/vetController';
import { Router } from 'express';
import upload from './../libs/configMulter';

const vetRouter: Router = Router();

vetRouter.get("/", getVets)

vetRouter.post("/addVet", upload.single("photoVet"), addVetValidation, addVet)

vetRouter.put("/updateVet/:idVet", updateVetValidation, updateVet)

export default vetRouter