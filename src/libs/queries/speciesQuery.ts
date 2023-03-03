export const getSpeciesQuery = "SELECT * FROM especie";

export const addSpeciesQuery = "INSERT INTO especie(nombreEspecie) VALUES (?);"

export const updateSpeciesQuery = "UPDATE especie SET nombreEspecie = ? WHERE idEspecie = ?"