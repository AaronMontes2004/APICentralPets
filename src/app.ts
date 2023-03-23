import path from 'path';
import express, { Application, Request, Response } from "express";
import cors from "cors"
import morgan from "morgan";
import passport from "passport";
import strategyPassport from "./middlewares/jwt/passport"
import userRouter from "./routes/userRouter";
import specialtyRouter from "./routes/specialtyRouter";
import speciesRouter from "./routes/speciesRouter";
import categoryRouter from "./routes/categoryRouter";
import petRouter from "./routes/petRouter";
import productRouter from "./routes/productRouter";
import vetRouter from "./routes/VetRouter";
import appointmentTypeRouter from "./routes/appointmentTypeRouter";
import appointmentRouter from "./routes/appointmentRouter";
import reservationRouter from "./routes/reservationRouter";
import diagnosticRouter from "./routes/diagnosticRouter";
import treatmentRouter from "./routes/treatmentRouter";
import medicalHistoryRouter from "./routes/medicalHistoryRouter";
import saleRouter from "./routes/saleRouter";
import saleDetailRouter from "./routes/saleDetailRouter";
import brandRouter from "./routes/brandRouter";

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

// static files

app.use(express.static(path.join(__dirname, "public")))

// Routes
app.get("/", passport.authenticate("jwt", {session: false}), (req: Request,res: Response): Response => {
    return res.json("HELLO WORLD!!");
})

app.use("/api/user",userRouter)
app.use("/api/specialty", specialtyRouter)
app.use("/api/species", speciesRouter)
app.use("/api/category", categoryRouter)
app.use("/api/pet", petRouter)
app.use("/api/product", productRouter)
app.use("/api/vet", vetRouter)
app.use("/api/appointmentType", appointmentTypeRouter)
app.use("/api/appointment", appointmentRouter)
app.use("/api/reservation", reservationRouter)
app.use("/api/diagnostic", diagnosticRouter)
app.use("/api/treatment", treatmentRouter)
app.use("/api/medicalHistory", medicalHistoryRouter)
app.use("/api/sale", saleRouter)
app.use("/api/saleDetail", saleDetailRouter)
app.use("/api/brand", brandRouter)

app.use((req,res) => {
    res.status(404).json({
        status: "NOT FOUND",
        msg: "La petición realizada no existe"
    })
})

export default app;