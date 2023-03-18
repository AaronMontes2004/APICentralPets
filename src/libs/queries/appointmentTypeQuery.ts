export const getAppointmentTypesQuery: string = "SELECT * FROM tipo_cita"

export const addAppointmentTypeQuery: string = "INSERT INTO tipo_cita(nombreTipoCita, descripcionTipoCita) VALUES (?,?)"

export const updateAppointmentTypeQuery: string = "UPDATE tipo_cita SET nombreTipoCita = ?, descripcionTipoCita = ? WHERE idTipoCita = ?"

export const findByIdAppointmentTypeQuery: string = "SELECT * FROM tipo_cita WHERE idTipoCita = ?"