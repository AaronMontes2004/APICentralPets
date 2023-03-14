export const getProductsQuery: string = "SELECT * FROM producto"

export const addProductQuery: string = "INSERT INTO producto(nombreProducto, descripcionProducto, stockProducto, precioProducto, imagenProducto, idCategoria, idMarca) VALUES (?,?,?,?,?,?,?)"

export const updateProductQuery: string = "UPDATE producto SET nombreProducto = ?, descripcionProducto = ?, stockProducto = ?, precioProducto = ?, idCategoria = ?, idMarca = ? WHERE idProducto = ?"