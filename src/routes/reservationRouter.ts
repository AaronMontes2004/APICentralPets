import { addReservationValidation, findByIdReservationValidation, updateReservationValidation } from './../middlewares/validations/reservationValidation';
import { addReservation, findByIdReservation, getReservations, updateReservation } from './../controllers/reservationController';
import { Router } from "express";

const reservationRouter: Router = Router();

reservationRouter.get("/", getReservations)

reservationRouter.post("/addReservation", addReservationValidation, addReservation)

reservationRouter.put("/updateReservation/:idReservation", updateReservationValidation, updateReservation)

reservationRouter.get("/findById/:idReservation", findByIdReservationValidation, findByIdReservation)

export default reservationRouter;