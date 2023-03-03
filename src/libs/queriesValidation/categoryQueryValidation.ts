export const verifyNameCategory: string = "SELECT * FROM categoria WHERE nombreCategoria = ? AND estadoCategoria = 1"

export const verifyIdCategory: string = "SELECT * FROM categoria WHERE idCategoria = ?"

export const verifyNameCategoryRepeated: string = "SELECT * FROM categoria WHERE idCategoria != ? AND nombreCategoria = ? AND estadoCategoria = 1"