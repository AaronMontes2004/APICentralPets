export const getVetsQuery: string = "SELECT * FROM veterinario"

export const addVetQuery: string = "INSERT INTO veterinario(nombreVeterinario, apellidoVeterinario, dniVeterinario, telefonoVeterinario, direccionVeterinario, sexoVeterinario, correoVeterinario, fotoVeterinario, idEspecialidad) VALUES (?,?,?,?,?,?,?,?,?)"

export const updateVetQuery: string = "UPDATE veterinario SET nombreVeterinario = ?, apellidoVeterinario = ?, dniVeterinario = ?, telefonoVeterinario = ?, direccionVeterinario = ?, sexoVeterinario = ?, correoVeterinario = ?, idEspecialidad = ? WHERE idVeterinario = ?"