import { addDiagnosticValidation, updateDiagnosticValidation } from './../middlewares/validations/diagnosticValidation';
import { addDiagnostic, getDiagnostics, updateDiagnostic } from './../controllers/diagnosticController';
import { Router } from 'express';

const diagnosticRouter: Router = Router();

diagnosticRouter.get("/", getDiagnostics)

diagnosticRouter.post("/addDiagnostic", addDiagnosticValidation, addDiagnostic)

diagnosticRouter.put("/updateDiagnostic/:idDiagnostic", updateDiagnosticValidation, updateDiagnostic)

export default diagnosticRouter;