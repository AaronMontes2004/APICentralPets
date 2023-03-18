import { addSaleValidation, findByIdSaleValidation, updateSaleValidation } from './../middlewares/validations/saleValidation';
import { addSale, findByIdSale, getSales, updateSale } from './../controllers/saleController';
import { Router } from "express";

const saleRouter: Router = Router()

saleRouter.get("/", getSales)

saleRouter.post("/addSale", addSaleValidation, addSale)

saleRouter.put("/updateSale/:idSale", updateSaleValidation, updateSale)

saleRouter.get("/findById/:idSale", findByIdSaleValidation, findByIdSale)

export default saleRouter