
export const verifyIdReservation: string = "SELECT * FROM reservacion WHERE idReservacion = ?"

export const verifyIdClinic: string = "SELECT * FROM clinica WHERE idClinica = ?"

export const verifyIdPet: string = "SELECT * FROM mascota WHERE idMascota = ? AND estadoMascota = 1"

export const verifyIdVet: string = "SELECT * FROM veterinario WHERE idVeterinario = ?"

export const verifyIdAppointmentType: string = "SELECT * FROM tipo_cita WHERE idTipoCita = ?"

export const verifyIdAppointment: string = "SELECT * FROM cita WHERE idCita = ?"