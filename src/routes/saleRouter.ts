import { addSaleValidation, updateSaleValidation } from './../middlewares/validations/saleValidation';
import { addSale, getSales, updateSale } from './../controllers/saleController';
import { Router } from "express";

const saleRouter: Router = Router()

saleRouter.get("/", getSales)

saleRouter.post("/addSale", addSaleValidation, addSale)

saleRouter.put("/updateSale/:idSale", updateSaleValidation, updateSale)

export default saleRouter