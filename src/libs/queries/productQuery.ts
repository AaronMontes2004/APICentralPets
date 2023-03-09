export const getProductsQuery: string = "SELECT * FROM producto"

export const addProductQuery: string = "INSERT INTO producto(nombreProducto, descripcionProducto, stockProducto, precioProducto, imagenProducto, idCategoria) VALUES (?,?,?,?,?,?)"

export const updateProductQuery: string = "UPDATE producto SET nombreProducto = ?, descripcionProducto = ?, stockProducto = ?, precioProducto = ?, idCategoria = ? WHERE idProducto = ?"