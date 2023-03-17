import { addMedicalHistoryValidation, updateMedicalHistoryValidation } from './../middlewares/validations/medicalHistoryValidation';

import { addMedicalHistory, getMedicalHistory, updateMedicalHistory } from './../controllers/medicalHistoryController';
import { Router } from "express";

const medicalHistoryRouter: Router = Router()

medicalHistoryRouter.get("/", getMedicalHistory)

medicalHistoryRouter.post("/addMedicalHistory", addMedicalHistoryValidation, addMedicalHistory)

medicalHistoryRouter.put("/updateMedicalHistory/:idMedicalHistory", updateMedicalHistoryValidation, updateMedicalHistory)

export default medicalHistoryRouter