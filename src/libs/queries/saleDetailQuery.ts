export const getSalesDetailQuery: string = "SELECT * FROM detalle_venta"

export const addSaleDetailQuery: string = "INSERT INTO detalle_venta(idVenta, idProducto, cantidadProducto, precioUnitarioProducto, totalPagarProducto) VALUES (?,?,?,?,?)"

export const updateSaleDetailQuery: string = "UPDATE detalle_venta SET idVenta = ?, idProducto = ?, cantidadProducto = ?, precioUnitarioProducto = ?, totalPagarProducto = ? WHERE numVenta = ?"