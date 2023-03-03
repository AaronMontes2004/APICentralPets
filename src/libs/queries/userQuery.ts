export const getUsersQuery: string = "SELECT * FROM usuario";

export const loginUserQuery: string = "SELECT * FROM usuario WHERE correoUsuario = ? AND estadoUsuario = 1";
export const signupUserQuery: string = "INSERT INTO usuario(nombreUsuario, apellidoUsuario, usuarioUsuario, correoUsuario, contrasenaUsuario, celularUsuario, direccionUsuario, sexoUsuario, dniUsuario) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)"