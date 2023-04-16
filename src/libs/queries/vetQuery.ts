export const getVetsQuery: string = "SELECT * FROM veterinario v INNER JOIN especialidad e ON v.idEspecialidad = e.idEspecialidad INNER JOIN sexo s ON v.idSexo = s.idSexo WHERE estadoVeterinario = 1"

export const addVetQuery: string = "INSERT INTO veterinario(nombreVeterinario, apellidoVeterinario, dniVeterinario, telefonoVeterinario, direccionVeterinario, correoVeterinario, fotoVeterinario, idEspecialidad, idSexo) VALUES (?,?,?,?,?,?,?,?,?)"

export const updateVetQuery: string = "UPDATE veterinario SET nombreVeterinario = ?, apellidoVeterinario = ?, dniVeterinario = ?, telefonoVeterinario = ?, direccionVeterinario = ?, correoVeterinario = ?, idEspecialidad = ?, idSexo = ? WHERE idVeterinario = ?"

export const updateVetAndroidQuery: string = "UPDATE veterinario SET nombreVeterinario = ?, apellidoVeterinario = ?, dniVeterinario = ?, telefonoVeterinario = ?, direccionVeterinario = ?, correoVeterinario = ?, idEspecialidad = ?, idSexo = ?, fotoVeterinario = ? WHERE idVeterinario = ?"

export const findByIdVetQuery: string = "SELECT * FROM veterinario v INNER JOIN especialidad e ON v.idEspecialidad = e.idEspecialidad INNER JOIN sexo s ON v.idSexo = s.idSexo WHERE idVeterinario = ? AND estadoVeterinario = 1"

export const findAllByIdVetQuery: string = "SELECT * FROM veterinario v INNER JOIN especialidad e ON v.idEspecialidad = e.idEspecialidad INNER JOIN sexo s ON v.idSexo = s.idSexo WHERE idVeterinario = ?"

export const changeStatusVetQuery: string = "UPDATE veterinario SET estadoVeterinario = ? WHERE idVeterinario = ?"