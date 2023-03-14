export const getVetsQuery: string = "SELECT * FROM veterinario"

export const addVetQuery: string = "INSERT INTO veterinario(nombreVeterinario, apellidoVeterinario, dniVeterinario, telefonoVeterinario, direccionVeterinario, correoVeterinario, fotoVeterinario, idEspecialidad, idSexo) VALUES (?,?,?,?,?,?,?,?,?)"

export const updateVetQuery: string = "UPDATE veterinario SET nombreVeterinario = ?, apellidoVeterinario = ?, dniVeterinario = ?, telefonoVeterinario = ?, direccionVeterinario = ?, correoVeterinario = ?, idEspecialidad = ?, idSexo = ? WHERE idVeterinario = ?"