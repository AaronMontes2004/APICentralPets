import { addAppointmentTypeValidation, updateAppointmentTypeValidation } from './../middlewares/validations/appointmentTypeValidation';
import { addAppointmentType, getAppointmentTypes, updateAppointmentType } from './../controllers/appointmentTypeController';
import { Router } from "express";

const appointmentTypeRouter: Router = Router();

appointmentTypeRouter.get("/", getAppointmentTypes)

appointmentTypeRouter.post("/addAppointmentType", addAppointmentTypeValidation, addAppointmentType)

appointmentTypeRouter.put("/updateAppointmentType/:idAppointmentType", updateAppointmentTypeValidation, updateAppointmentType)

export default appointmentTypeRouter