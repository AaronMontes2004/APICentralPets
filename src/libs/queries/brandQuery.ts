export const getBrandsQuery: string = "SELECT * FROM marca WHERE estadoMarca = 1"

export const addBrandQuery: string = "INSERT INTO marca(nombreMarca) VALUES (?)"

export const updateBrandQuery: string = "UPDATE marca SET nombreMarca = ? WHERE idMarca = ?"