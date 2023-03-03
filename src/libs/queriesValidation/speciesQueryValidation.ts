export const verifyNameSpecies = "SELECT * FROM especie WHERE nombreEspecie = ? AND estadoEspecie = 1";

export const verifyIdSpecies = "SELECT * FROM especie WHERE idEspecie = ? AND estadoEspecie = 1";

export const verifyNameSpeciesRepeated = "SELECT * FROM especie WHERE idEspecie != ? AND nombreEspecie = ? AND estadoEspecie = 1";