import dotenv from "dotenv"
dotenv.config()
import "./database"
import app from "./app"

app.listen(app.get("PORT"))
console.log("Server on port "+app.get("PORT"))