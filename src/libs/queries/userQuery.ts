export const getUsersQuery: string = "SELECT * FROM usuario WHERE estadoUsuario = 1";

export const loginUserQuery: string = "SELECT * FROM usuario WHERE correoUsuario = ? AND estadoUsuario = 1 AND estadoUsuario = 1";
export const signupUserQuery: string = "INSERT INTO usuario(nombreUsuario, apellidoUsuario, usuarioUsuario, correoUsuario, contrasenaUsuario, celularUsuario, direccionUsuario, dniUsuario, idSexo) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)"

export const findByIdUserQuery: string = "SELECT * FROM usuario WHERE idUsuario = ? AND estadoUsuario = 1"