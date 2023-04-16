export const getMedicalHistoryQuery: string = "SELECT * FROM historial_medico hm INNER JOIN mascota m ON hm.idMascota = m.idMascota INNER JOIN tratamiento t ON hm.idTratamiento = t.idTratamiento INNER JOIN diagnostico d ON hm.idDiagnostico = d.idDiagnostico"

export const addMedicalHistoryQuery: string = "INSERT INTO historial_medico(fechaCreacionHistorial,motivoHistorial, idDiagnostico, idTratamiento, idUsuario, idMascota) VALUES (?,?,?,?,?,?)"

export const updateMedicalHistoryQuery: string = "UPDATE historial_medico SET motivoHistorial = ?, idDiagnostico = ?, idTratamiento = ?, idUsuario = ?, idMascota = ? WHERE idHistorial = ?"

export const findByIdMedicalHistoryQuery: string = "SELECT * FROM historial_medico hm INNER JOIN mascota m ON hm.idMascota = m.idMascota INNER JOIN tratamiento t ON hm.idTratamiento = t.idTratamiento INNER JOIN diagnostico d ON hm.idDiagnostico = d.idDiagnostico WHERE idHistorial = ?"