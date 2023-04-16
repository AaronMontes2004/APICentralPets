export const getProductsQuery: string = "SELECT * FROM producto p INNER JOIN categoria c ON p.idCategoria = c.idCategoria WHERE p.estadoProducto = 1"

export const addProductQuery: string = "INSERT INTO producto(nombreProducto, descripcionProducto, stockProducto, precioProducto, imagenProducto, idCategoria, idMarca) VALUES (?,?,?,?,?,?,?)"

export const updateProductQuery: string = "UPDATE producto SET nombreProducto = ?, descripcionProducto = ?, stockProducto = ?, precioProducto = ?, idCategoria = ?, idMarca = ? WHERE idProducto = ?"

export const updateProductAndroidQuery: string = "UPDATE producto SET nombreProducto = ?, descripcionProducto = ?, stockProducto = ?, precioProducto = ?, idCategoria = ?, idMarca = ?, imagenProducto = ? WHERE idProducto = ?"

export const findByIdProductQuery: string = "SELECT * FROM producto p INNER JOIN categoria c ON p.idCategoria = c.idCategoria WHERE p.idProducto = ? AND p.estadoProducto = 1"

export const findProductsByIdCategoryQuery: string = "SELECT * FROM producto p INNER JOIN categoria c ON p.idCategoria = c.idCategoria WHERE p.idCategoria = ? AND p.estadoProducto = 1"

export const findAllByIdProductQuery: string = "SELECT * FROM producto WHERE idProducto = ?"

export const changeStatusProductQuery: string = "UPDATE producto SET estadoProducto = ? WHERE idProducto = ?"