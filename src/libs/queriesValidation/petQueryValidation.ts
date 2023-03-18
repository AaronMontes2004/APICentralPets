export const verifyIdSpecies: string = "SELECT * FROM especie WHERE idEspecie = ? AND estadoEspecie = 1"

export const verifyIdUser: string = "SELECT * FROM usuario WHERE idUsuario = ? AND estadoUsuario = 1"

export const verifyIdPet: string = "SELECT * FROM mascota WHERE idMascota = ? AND estadoMascota = 1"

export const verifyAllIdPet: string = "SELECT * FROM mascota WHERE idMascota = ?"