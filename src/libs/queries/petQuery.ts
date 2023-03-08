export const getPetsQuery: string = "SELECT * FROM mascota"

export const addPetQuery: string = "INSERT INTO mascota(nombreMascota, edadMascota, sexoMascota, pesoMascota, fotoMascota, idEspecie, idUsuario) VALUES (?,?,?,?,?,?,?)"

export const updatePetQuery: string = "UPDATE mascota SET nombreMascota = ?, edadMascota = ?, sexoMascota = ?, pesoMascota = ?, idEspecie = ?, idUsuario = ? WHERE idMascota = ?"