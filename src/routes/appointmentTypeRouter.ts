import { addAppointmentTypeValidation, findByIdAppointmentTypeValidation, updateAppointmentTypeValidation } from './../middlewares/validations/appointmentTypeValidation';
import { addAppointmentType, findByIdAppointmentType, getAppointmentTypes, updateAppointmentType } from './../controllers/appointmentTypeController';
import { Router } from "express";

const appointmentTypeRouter: Router = Router();

appointmentTypeRouter.get("/", getAppointmentTypes)

appointmentTypeRouter.post("/addAppointmentType", addAppointmentTypeValidation, addAppointmentType)

appointmentTypeRouter.put("/updateAppointmentType/:idAppointmentType", updateAppointmentTypeValidation, updateAppointmentType)

appointmentTypeRouter.get("/findById/:idAppointmentType", findByIdAppointmentTypeValidation, findByIdAppointmentType)

export default appointmentTypeRouter