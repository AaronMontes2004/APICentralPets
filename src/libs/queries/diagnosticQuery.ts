export const getDiagnosticsQuery: string = "SELECT * FROM diagnostico"

export const addDiagnosticQuery: string = "INSERT INTO diagnostico(descripcionDiagnostico) VALUES (?)"

export const updateDiagnosticQuery: string = "UPDATE diagnostico SET descripcionDiagnostico = ? WHERE idDiagnostico = ?"

export const findByIdDiagnosticQuery: string = "SELECT * FROM diagnostico WHERE idDiagnostico = ?"