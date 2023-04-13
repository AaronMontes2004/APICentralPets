import { addAppointmentValidation, findAppointmentByIdPetValidation, findByIdAppointmentValidation, updateAppointmentValidation } from './../middlewares/validations/appointmentValidation';
import { addAppointment, findAppointmentByIdPet, findByIdAppointment, getAppointments, updateAppointment } from './../controllers/appointmentController';
import { Router } from "express";

const appointmentRouter: Router = Router()

appointmentRouter.get("/", getAppointments)

appointmentRouter.post("/addAppointment", addAppointmentValidation, addAppointment)

appointmentRouter.put("/updateAppointment/:idAppointment", updateAppointmentValidation, updateAppointment)

appointmentRouter.get("/findById/:idAppointment", findByIdAppointmentValidation, findByIdAppointment)

appointmentRouter.get("/findAppointmentByIdPet/:idPet", findAppointmentByIdPetValidation, findAppointmentByIdPet)

export default appointmentRouter