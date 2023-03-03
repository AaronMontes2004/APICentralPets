export const getSpecialtiesQuery: string = "SELECT * FROM especialidad"

export const addSpecialtyQuery: string = "INSERT INTO especialidad(nombreEspecialidad, descripcionEspecialidad) VALUES (?,?)"

export const updateSpecialtyQuery: string = "UPDATE especialidad SET nombreEspecialidad = ?, descripcionEspecialidad = ? WHERE idEspecialidad = ?"