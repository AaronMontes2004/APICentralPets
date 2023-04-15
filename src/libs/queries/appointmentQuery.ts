export const getAppointmentsQuery: string = "SELECT * FROM cita c INNER JOIN reservacion r ON c.idReservacion = r.idReservacion INNER JOIN tipo_cita tc ON c.idTipoCita = tc.idTipoCita"

export const addAppointmentQuery: string = "INSERT INTO cita(fechaCreacionCita, descripcionCita, idReservacion, idClinica, idMascota, idVeterinario, idTipoCita) VALUES (?,?,?,?,?,?,?)"

export const updateAppointmentQuery: string = "UPDATE cita SET descripcionCita = ?, idReservacion = ?, idClinica = ?, idMascota = ?, idVeterinario = ?, idTipoCita = ? WHERE idCita = ?"

export const findByIdAppointmentQuery: string = "SELECT * FROM cita WHERE idCita = ?"

export const findAppointmentByIdPetQuery: string = "SELECT * FROM cita WHERE idMascota = ?"