export const getBrandsQuery: string = "SELECT * FROM marca WHERE estadoMarca = 1"

export const addBrandQuery: string = "INSERT INTO marca(nombreMarca) VALUES (?)"

export const updateBrandQuery: string = "UPDATE marca SET nombreMarca = ? WHERE idMarca = ?"

export const findByIdBrandQuery: string = "SELECT * FROM marca WHERE idMarca = ? AND estadoMarca = 1"

export const findAllByIdBrandQuery: string = "SELECT * FROM marca WHERE idMarca = ?"

export const changeStatusBrandQuery: string = "UPDATE marca SET estadoMarca = ? WHERE idMarca = ?"