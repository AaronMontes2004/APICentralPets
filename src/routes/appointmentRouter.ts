import { getAppointments } from './../controllers/appointmentController';
import { Router } from "express";

const appointmentRouter: Router = Router()

appointmentRouter.get("/", getAppointments)

appointmentRouter.post("/addAppointment")

appointmentRouter.put("/updateAppointment")

export default appointmentRouter