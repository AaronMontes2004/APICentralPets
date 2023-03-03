import express, { Application, Request, Response } from "express";
import cors from "cors"
import morgan from "morgan";
import passport from "passport";
import strategyPassport from "./middlewares/jwt/passport"
import userRouter from "./routes/userRouter";
import specialtyRouter from "./routes/specialtyRouter";
import speciesRouter from "./routes/speciesRouter";
import categoryRouter from "./routes/categoryRouter";

const app: Application = express();

// Settings
app.set("PORT", process.env.PORT || 4000);

// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(passport.initialize())
passport.use(strategyPassport)

// Routes
app.get("/", passport.authenticate("jwt", {session: false}), (req: Request,res: Response): Response => {
    return res.json("HELLO WORLD!!");
})

app.use("/api/user",userRouter)
app.use("/api/specialty", specialtyRouter)
app.use("/api/species", speciesRouter)
app.use("/api/category", categoryRouter)

export default app;