export const getPetsQuery: string = "SELECT * FROM mascota"

export const addPetQuery: string = "INSERT INTO mascota(nombreMascota, edadMascota, sexoMascota, pesoMascota, idEspecie, idUsuario) VALUES (?,?,?,?,?,?)"