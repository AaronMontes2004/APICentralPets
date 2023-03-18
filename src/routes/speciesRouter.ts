import { addSpeciesValidation, changeStatusSpeciesValidation, findByIdSpeciesValidation, updateSpeciesValidation } from './../middlewares/validations/speciesValidation';
import { getSpecies, addSpecies, updateSpecies, findByIdSpecies, changeStatusSpecies } from './../controllers/speciesController';
import { Router } from 'express';

const speciesRouter: Router = Router();

speciesRouter.get("/", getSpecies);

speciesRouter.post("/addSpecies", addSpeciesValidation, addSpecies);

speciesRouter.put("/updateSpecies/:idSpecies", updateSpeciesValidation, updateSpecies);

speciesRouter.get("/findById/:idSpecies", findByIdSpeciesValidation, findByIdSpecies);

speciesRouter.put("/changeStatus/:idSpecies", changeStatusSpeciesValidation, changeStatusSpecies);

export default speciesRouter;