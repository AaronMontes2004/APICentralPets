import { addTreatmentValidation, updateTreatmentValidation } from './../middlewares/validations/treatmentValidation';
import { addTreatment, getTreatments, updateTreatment } from './../controllers/treatmentController';
import { Router } from "express";

const treatmentRouter: Router = Router()

treatmentRouter.get("/", getTreatments)

treatmentRouter.post("/addTreatment", addTreatmentValidation, addTreatment)

treatmentRouter.put("/updateTreatment/:idTreatment", updateTreatmentValidation, updateTreatment)

export default treatmentRouter;