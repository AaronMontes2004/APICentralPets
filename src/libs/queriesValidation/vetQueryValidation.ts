export const verifyDNIVet: string = "SELECT * FROM veterinario WHERE dniVeterinario = ? AND estadoVeterinario = 1"

export const verifyEmailVet: string = "SELECT * FROM veterinario WHERE correoVeterinario = ? AND estadoVeterinario = 1"

export const verifyIdSpecialty: string = "SELECT * FROM  especialidad WHERE idEspecialidad = ? AND estadoEspecialidad = 1"

export const verifyIdVet: string = "SELECT * FROM veterinario WHERE idVeterinario = ? AND estadoVeterinario = 1"

export const verifyDNIVetRepeat: string = "SELECT * FROM veterinario WHERE idVeterinario != ? AND dniVeterinario = ? AND estadoVeterinario = 1"

export const verifyEmailVetRepeat: string = "SELECT * FROM veterinario WHERE idVeterinario != ? AND correoVeterinario = ? AND estadoVeterinario = 1"