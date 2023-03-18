import { addAppointmentValidation, findByIdAppointmentValidation, updateAppointmentValidation } from './../middlewares/validations/appointmentValidation';
import { addAppointment, findByIdAppointment, getAppointments, updateAppointment } from './../controllers/appointmentController';
import { Router } from "express";

const appointmentRouter: Router = Router()

appointmentRouter.get("/", getAppointments)

appointmentRouter.post("/addAppointment", addAppointmentValidation, addAppointment)

appointmentRouter.put("/updateAppointment/:idAppointment", updateAppointmentValidation, updateAppointment)

appointmentRouter.get("/findById/:idAppointment", findByIdAppointmentValidation, findByIdAppointment)

export default appointmentRouter