import { addPetValidation, addPetValidationAndroid, changeStatusPetValidation, findByIdPetValidation, updatePetValidation } from './../middlewares/validations/petValidation';
import { getPets, addPet, updatePet, findByIdPet, changeStatusPet, addPetAndroid, updatePetAndroid } from './../controllers/petController';
import { Router } from "express";
import upload from './../libs/configMulter';

const petRouter: Router = Router();

petRouter.get("/", getPets);

petRouter.post("/addPet", upload.single("photoPet"), addPetValidation, addPet)

petRouter.post("/android/addPet", addPetValidationAndroid, addPetAndroid)

petRouter.put("/updatePet/:idPet", updatePetValidation, updatePet)

petRouter.put("/android/updatePet/:idPet", updatePetValidation, updatePetAndroid)

petRouter.get("/findById/:idPet", findByIdPetValidation, findByIdPet)

petRouter.put("/changeStatus/:idPet", changeStatusPetValidation, changeStatusPet)

export default petRouter;