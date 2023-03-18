export const getAppointmentsQuery: string = "SELECT * FROM cita"

export const addAppointmentQuery: string = "INSERT INTO cita(fechaCreacionCita, descripcionCita, idReservacion, idClinica, idMascota, idVeterinario, idTipoCita) VALUES (?,?,?,?,?,?,?)"

export const updateAppointmentQuery: string = "UPDATE cita SET descripcionCita = ?, idReservacion = ?, idClinica = ?, idMascota = ?, idVeterinario = ?, idTipoCita = ? WHERE idCita = ?"

export const findByIdAppointmentQuery: string = "SELECT * FROM cita WHERE idCita = ?"