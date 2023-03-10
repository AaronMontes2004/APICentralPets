export const verifyNameAppointmentType: string = "SELECT * FROM tipo_cita WHERE nombreTipoCita = ?"

export const verifyIdAppointmentType: string = "SELECT * FROM tipo_cita WHERE idTipoCita = ?"

export const verifyNameAppointmentTypeRepeat: string = "SELECT * FROM tipo_cita WHERE idTipoCita != ? AND nombreTipoCita = ?"