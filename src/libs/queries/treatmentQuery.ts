
export const getTreatmentQuery: string = "SELECT * FROM tratamiento"

export const addTreatmentQuery: string = "INSERT INTO tratamiento(descripcionTratamiento) VALUES (?)"

export const updateTreatmentQuery: string = "UPDATE tratamiento SET descripcionTratamiento = ? WHERE idTratamiento = ?"

export const findByIdTreatmentQuery: string = "SELECT * FROM tratamiento WHERE idTratamiento = ?"