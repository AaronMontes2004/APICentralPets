
export const getSalesQuery: string = "SELECT * FROM venta"

export const addSaleQuery: string = "INSERT INTO venta(idUsuario, fechaVenta) VALUES (?,?)"

export const updateSaleQuery: string = "UPDATE venta SET idUsuario = ? WHERE idVenta = ?"

export const findByIdSaleQuery: string = "SELECT * FROM venta WHERE idVenta = ?"