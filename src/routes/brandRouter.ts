import { addBrandValidation, changeStatusBrandValidation, findByIdBrandValidation, updateBrandValidation } from './../middlewares/validations/brandValidation';
import { addBrand, changeStatusBrand, findByIdBrand, getBrands, updateBrand } from './../controllers/brandController';
import { Router } from "express";

const brandRouter: Router = Router();

brandRouter.get("/", getBrands)

brandRouter.post("/addBrand", addBrandValidation, addBrand)

brandRouter.put("/updateBrand/:idBrand", updateBrandValidation, updateBrand)

brandRouter.get("/findById/:idBrand", findByIdBrandValidation, findByIdBrand)

brandRouter.put("/changeStatus/:idBrand", changeStatusBrandValidation, changeStatusBrand)

export default brandRouter;