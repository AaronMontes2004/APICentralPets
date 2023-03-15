import { addReservationValidation, updateReservationValidation } from './../middlewares/validations/reservationValidation';
import { addReservation, getReservations, updateReservation } from './../controllers/reservationController';
import { Router } from "express";

const reservationRouter: Router = Router();

reservationRouter.get("/", getReservations)

reservationRouter.post("/addReservation", addReservationValidation, addReservation)

reservationRouter.put("/updateReservation/:idReservation", updateReservationValidation, updateReservation)

export default reservationRouter;