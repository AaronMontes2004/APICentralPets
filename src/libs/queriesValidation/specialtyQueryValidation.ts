export const verifyNameSpecialty: string = "SELECT * FROM especialidad WHERE nombreEspecialidad = ? AND estadoEspecialidad = 1"

export const verifyIdSpecialty: string = "SELECT * FROM especialidad WHERE idEspecialidad = ? AND estadoEspecialidad = 1"

export const verifyAllIdSpecialty: string = "SELECT * FROM especialidad WHERE idEspecialidad = ?"

export const verifyNameSpecialtyRepeated: string = "SELECT * FROM especialidad WHERE idEspecialidad != ? AND nombreEspecialidad = ? AND estadoEspecialidad = 1"