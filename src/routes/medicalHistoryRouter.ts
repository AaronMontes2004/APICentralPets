import { addMedicalHistoryValidation, findByIdMedicalHistoryValidation, updateMedicalHistoryValidation } from './../middlewares/validations/medicalHistoryValidation';

import { addMedicalHistory, findByIdMedicalHistory, getMedicalHistory, updateMedicalHistory } from './../controllers/medicalHistoryController';
import { Router } from "express";

const medicalHistoryRouter: Router = Router()

medicalHistoryRouter.get("/", getMedicalHistory)

medicalHistoryRouter.post("/addMedicalHistory", addMedicalHistoryValidation, addMedicalHistory)

medicalHistoryRouter.put("/updateMedicalHistory/:idMedicalHistory", updateMedicalHistoryValidation, updateMedicalHistory)

medicalHistoryRouter.get("/findById/:idMedicalHistory", findByIdMedicalHistoryValidation, findByIdMedicalHistory)

export default medicalHistoryRouter