import pool from "../../database";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt"

interface JwtPayload{ id: number, iat: number, exp: number }

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "central_pets"
}

export default new Strategy(opts, async (jwt_payload: JwtPayload, done) => {

    try {
        const id = jwt_payload.id;

        const userFound: any = await pool.query("SELECT * FROM usuario WHERE idUsuario = ?", [id]);

        if (userFound[0].length === 0){
            return done(null, false)
        }

        if (userFound[0][0]?.rolUsuario.toLowerCase() !== "administrador"){
            return done(null, false)
        }

        return done(null, userFound[0][0])
    } catch (error) {
        console.log(error);
        return done(null, false)
    }
})