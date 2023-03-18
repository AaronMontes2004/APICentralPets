import { addSaleDetailValidation, findByIdSaleDetailValidation, updateSaleDetailValidation } from './../middlewares/validations/saleDetailValidation';
import { getSalesDetail, addSaleDetail, updateSaleDetail, findByIdSaleDetail } from '../controllers/saleDetailController';
import { Router } from 'express';

const saleDetailRouter: Router = Router();

saleDetailRouter.get("/", getSalesDetail)

saleDetailRouter.post("/addSaleDetail", addSaleDetailValidation, addSaleDetail)

saleDetailRouter.put("/updateSaleDetail/:numSale", updateSaleDetailValidation, updateSaleDetail)

saleDetailRouter.get("/findById/:numSale", findByIdSaleDetailValidation, findByIdSaleDetail)

export default saleDetailRouter;