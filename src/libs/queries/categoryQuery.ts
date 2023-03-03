export const getCategoriesQuery: string = "SELECT * FROM categoria"

export const addCategoryQuery: string = "INSERT INTO categoria(nombreCategoria) VALUES (?)"

export const updateCategoryQuery: string = "UPDATE categoria SET nombreCategoria = ? WHERE idCategoria = ?"