import { getPets, addPet } from './../controllers/petController';
import { Router } from "express";
import upload from './../libs/configMulter';

const petRouter: Router = Router();

petRouter.get("/", getPets);

petRouter.post("/addPet", upload.single("photoPet"), addPet);

petRouter.put("/updatePet/:idPet")

export default petRouter;