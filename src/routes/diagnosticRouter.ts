import { addDiagnosticValidation, findByIdDiagnosticValidation, updateDiagnosticValidation } from './../middlewares/validations/diagnosticValidation';
import { addDiagnostic, findByIdDiagnostic, getDiagnostics, updateDiagnostic } from './../controllers/diagnosticController';
import { Router } from 'express';

const diagnosticRouter: Router = Router();

diagnosticRouter.get("/", getDiagnostics)

diagnosticRouter.post("/addDiagnostic", addDiagnosticValidation, addDiagnostic)

diagnosticRouter.put("/updateDiagnostic/:idDiagnostic", updateDiagnosticValidation, updateDiagnostic)

diagnosticRouter.get("/findById/:idDiagnostic", findByIdDiagnosticValidation, findByIdDiagnostic)

export default diagnosticRouter;