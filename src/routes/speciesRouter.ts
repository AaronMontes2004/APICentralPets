import { addSpeciesValidation, updateSpeciesValidation } from './../middlewares/validations/speciesValidation';
import { getSpecies, addSpecies, updateSpecies } from './../controllers/speciesController';
import { Router } from 'express';

const speciesRouter: Router = Router();

speciesRouter.get("/", getSpecies);

speciesRouter.post("/addSpecies", addSpeciesValidation, addSpecies);

speciesRouter.put("/updateSpecies/:idSpecies", updateSpeciesValidation, updateSpecies);

export default speciesRouter;