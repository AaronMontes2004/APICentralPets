import { addTreatmentValidation, findByIdTreatmentValidation, updateTreatmentValidation } from './../middlewares/validations/treatmentValidation';
import { addTreatment, findByIdTreatment, getTreatments, updateTreatment } from './../controllers/treatmentController';
import { Router } from "express";

const treatmentRouter: Router = Router()

treatmentRouter.get("/", getTreatments)

treatmentRouter.post("/addTreatment", addTreatmentValidation, addTreatment)

treatmentRouter.put("/updateTreatment/:idTreatment", updateTreatmentValidation, updateTreatment)

treatmentRouter.get("/findById/:idTreatment", findByIdTreatmentValidation, findByIdTreatment)

export default treatmentRouter;