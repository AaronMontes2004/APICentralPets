export const getSpeciesQuery = "SELECT * FROM especie WHERE estadoEspecie = 1";

export const addSpeciesQuery = "INSERT INTO especie(nombreEspecie) VALUES (?);"

export const updateSpeciesQuery = "UPDATE especie SET nombreEspecie = ? WHERE idEspecie = ?"

export const findByIdSpeciesQuery = "SELECT * FROM especie WHERE idEspecie = ? AND estadoEspecie = 1"

export const findAllByIdSpeciesQuery = "SELECT * FROM especie WHERE idEspecie = ?"

export const changeStatusSpeciesQuery = "UPDATE especie SET estadoEspecie = ? WHERE idEspecie = ?"