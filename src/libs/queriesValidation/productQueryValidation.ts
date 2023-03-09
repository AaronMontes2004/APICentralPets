export const verifyNameProduct: string = "SELECT * FROM producto WHERE nombreProducto = ? AND estadoProducto = 1"

export const verifyIdCategory: string = "SELECT * FROM categoria WHERE idCategoria = ? AND estadoCategoria = 1"

export const verifyIdProduct: string = "SELECT * FROM producto WHERE idProducto = ? AND estadoProducto = 1"

export const verifyNameProductRepeat: string = "SELECT * FROM producto WHERE idProducto != ? AND nombreProducto = ? AND estadoProducto = 1"