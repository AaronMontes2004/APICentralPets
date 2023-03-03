import mysql2 from "mysql2"
import Pool from "mysql2/typings/mysql/lib/Pool"

const poolConnection: Pool = mysql2.createPool({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "central_pets"
})

const pool = poolConnection.promise();

pool.getConnection().then((v:Pool) => {
    console.log("Connected to the database", v.config.database)
}).catch((err: Error) => {
    console.log(err);
})

export default pool as Pool;