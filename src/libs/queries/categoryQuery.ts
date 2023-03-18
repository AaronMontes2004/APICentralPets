export const getCategoriesQuery: string = "SELECT * FROM categoria WHERE estadoCategoria = 1"

export const addCategoryQuery: string = "INSERT INTO categoria(nombreCategoria) VALUES (?)"

export const updateCategoryQuery: string = "UPDATE categoria SET nombreCategoria = ? WHERE idCategoria = ?"

export const findByIdCategoryQuery: string = "SELECT * FROM categoria WHERE idCategoria = ? AND estadoCategoria = 1"

export const findAllByIdCategoryQuery: string = "SELECT * FROM categoria WHERE idCategoria = ?"

export const changeStatusCategoryQuery: string = "UPDATE categoria SET estadoCategoria = ? WHERE idCategoria = ?"