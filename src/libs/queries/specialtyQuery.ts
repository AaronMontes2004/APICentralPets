export const getSpecialtiesQuery: string = "SELECT * FROM especialidad WHERE estadoEspecialidad = 1"

export const addSpecialtyQuery: string = "INSERT INTO especialidad(nombreEspecialidad, descripcionEspecialidad) VALUES (?,?)"

export const updateSpecialtyQuery: string = "UPDATE especialidad SET nombreEspecialidad = ?, descripcionEspecialidad = ? WHERE idEspecialidad = ?"

export const findByIdSpecialtyQuery: string = "SELECT * FROM especialidad WHERE idEspecialidad = ? AND estadoEspecialidad = 1"