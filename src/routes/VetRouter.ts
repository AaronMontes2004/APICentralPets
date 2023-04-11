import { addVetValidation, addVetValidationAndroid, changeStatusVetValidation, findByIdVetValidation, updateVetValidation } from './../middlewares/validations/vetValidation';
import { getVets, addVet, updateVet, findByIdVet, changeStatusVet, addVetAndroid, updateVetAndroid } from './../controllers/vetController';
import { Router } from 'express';
import upload from './../libs/configMulter';

const vetRouter: Router = Router();

vetRouter.get("/", getVets)

vetRouter.post("/addVet", upload.single("photoVet"), addVetValidation, addVet)

vetRouter.post("/android/addVet", addVetValidationAndroid, addVetAndroid)

vetRouter.put("/updateVet/:idVet", updateVetValidation, updateVet)

vetRouter.put("/android/updateVet/:idVet", updateVetValidation, updateVetAndroid)

vetRouter.get("/findById/:idVet", findByIdVetValidation, findByIdVet)

vetRouter.put("/changeStatus/:idVet", changeStatusVetValidation, changeStatusVet)

export default vetRouter