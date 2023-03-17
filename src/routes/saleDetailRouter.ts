import { addSaleDetailValidation, updateSaleDetailValidation } from './../middlewares/validations/saleDetailValidation';
import { getSalesDetail, addSaleDetail, updateSaleDetail } from '../controllers/saleDetailController';
import { Router } from 'express';

const saleDetailRouter: Router = Router();

saleDetailRouter.get("/", getSalesDetail)

saleDetailRouter.post("/addSaleDetail", addSaleDetailValidation, addSaleDetail)

saleDetailRouter.put("/updateSaleDetail/:numSale", updateSaleDetailValidation, updateSaleDetail)

export default saleDetailRouter;