
export const getTreatmentQuery: string = "SELECT * FROM tratamiento"

export const addTreatmentQuery: string = "INSERT INTO tratamiento(descripcionTratamiento) VALUES (?)"

export const updateTreatmentQuery: string = "UPDATE tratamiento SET descripcionTratamiento = ? WHERE idTratamiento = ?"