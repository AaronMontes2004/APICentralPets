export const getMedicalHistoryQuery: string = "SELECT * FROM historial_medico"

export const addMedicalHistoryQuery: string = "INSERT INTO historial_medico(fechaCreacionHistorial,motivoHistorial, idDiagnostico, idTratamiento, idUsuario, idMascota) VALUES (?,?,?,?,?,?)"

export const updateMedicalHistoryQuery: string = "UPDATE historial_medico SET motivoHistorial = ?, idDiagnostico = ?, idTratamiento = ?, idUsuario = ?, idMascota = ? WHERE idHistorial = ?"

export const findByIdMedicalHistoryQuery: string = "SELECT * FROM historial_medico WHERE idHistorial = ?"