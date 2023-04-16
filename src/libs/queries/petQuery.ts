export const getPetsQuery: string = "SELECT * FROM mascota m INNER JOIN especie e ON m.idEspecie = e.idEspecie WHERE estadoMascota = 1"

export const addPetQuery: string = "INSERT INTO mascota(nombreMascota, edadMascota, sexoMascota, pesoMascota, fotoMascota, idEspecie, idUsuario) VALUES (?,?,?,?,?,?,?)"

export const updatePetQuery: string = "UPDATE mascota SET nombreMascota = ?, edadMascota = ?, sexoMascota = ?, pesoMascota = ?, idEspecie = ?, idUsuario = ? WHERE idMascota = ?"

export const updatePetAndroidQuery: string = "UPDATE mascota SET nombreMascota = ?, edadMascota = ?, sexoMascota = ?, pesoMascota = ?, idEspecie = ?, idUsuario = ?, fotoMascota = ? WHERE idMascota = ?"

export const findByIdPetQuery: string = "SELECT * FROM mascota m INNER JOIN especie e ON m.idEspecie = e.idEspecie WHERE idMascota = ? AND estadoMascota = 1"

export const findAllByIdPetQuery: string = "SELECT * FROM mascota m INNER JOIN especie e ON m.idEspecie = e.idEspecie WHERE idMascota = ?"

export const changeStatusPetQuery: string = "UPDATE mascota SET estadoMascota = ? WHERE idMascota = ?"

export const findPetsByIdUserQuery: string = "SELECT * FROM mascota m INNER JOIN especie e ON m.idEspecie = e.idEspecie WHERE idUsuario = ? AND estadoMascota = 1"