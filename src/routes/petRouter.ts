import { addPetValidation, changeStatusPetValidation, findByIdPetValidation, updatePetValidation } from './../middlewares/validations/petValidation';
import { getPets, addPet, updatePet, findByIdPet, changeStatusPet } from './../controllers/petController';
import { Router } from "express";
import upload from './../libs/configMulter';

const petRouter: Router = Router();

petRouter.get("/", getPets);

petRouter.post("/addPet", upload.single("photoPet"), addPetValidation, addPet)

petRouter.put("/updatePet/:idPet", updatePetValidation, updatePet)

petRouter.get("/findById/:idPet", findByIdPetValidation, findByIdPet)

petRouter.put("/changeStatus/:idPet", changeStatusPetValidation, changeStatusPet)

export default petRouter;