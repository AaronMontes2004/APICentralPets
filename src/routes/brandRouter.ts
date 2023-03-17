import { addBrandValidation, updateBrandValidation } from './../middlewares/validations/brandValidation';
import { addBrand, getBrands, updateBrand } from './../controllers/brandController';
import { Router } from "express";

const brandRouter: Router = Router();

brandRouter.get("/", getBrands)

brandRouter.post("/addBrand", addBrandValidation, addBrand)

brandRouter.put("/updateBrand/:idBrand", updateBrandValidation, updateBrand)

export default brandRouter;