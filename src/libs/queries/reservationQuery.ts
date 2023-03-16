export const getReservationsQuery: string = "SELECT * FROM reservacion"

export const addReservationQuery: string = "INSERT INTO reservacion(fechaReservacion, horaReservacion, horaMaximaReservacion) VALUES (?,?,?)"

export const updatedReservationQuery: string = "UPDATE reservacion SET fechaReservacion = ?, horaReservacion = ?, horaMaximaReservacion = ? WHERE idReservacion = ?"