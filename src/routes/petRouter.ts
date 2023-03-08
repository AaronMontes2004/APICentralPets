import { addPetValidation, updatePetValidation } from './../middlewares/validations/petValidation';
import { getPets, addPet, updatePet } from './../controllers/petController';
import { Router } from "express";
import upload from './../libs/configMulter';

const petRouter: Router = Router();

petRouter.get("/", getPets);

petRouter.post("/addPet", upload.single("photoPet"), addPetValidation, addPet);

petRouter.put("/updatePet/:idPet", updatePetValidation, updatePet)

export default petRouter;