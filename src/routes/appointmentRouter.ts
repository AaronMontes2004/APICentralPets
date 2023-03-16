import { addAppointmentValidation, updateAppointmentValidation } from './../middlewares/validations/appointmentValidation';
import { addAppointment, getAppointments, updateAppointment } from './../controllers/appointmentController';
import { Router } from "express";

const appointmentRouter: Router = Router()

appointmentRouter.get("/", getAppointments)

appointmentRouter.post("/addAppointment", addAppointmentValidation, addAppointment)

appointmentRouter.put("/updateAppointment/:idAppointment", updateAppointmentValidation, updateAppointment)

export default appointmentRouter