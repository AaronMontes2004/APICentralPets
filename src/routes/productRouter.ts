import { addProductValidation, findByIdProductValidation, updateProductValidation } from './../middlewares/validations/productValidation';
import { getProducts, addProduct, updateProduct, findByIdProduct } from './../controllers/productController';
import { Router } from 'express';
import upload from './../libs/configMulter';

const productRouter: Router = Router()

productRouter.get("/", getProducts)

productRouter.post("/addProduct", upload.single("imageProduct"), addProductValidation, addProduct)

productRouter.put("/updateProduct/:idProduct", updateProductValidation, updateProduct)

productRouter.get("/findById/:idProduct", findByIdProductValidation, findByIdProduct)

export default productRouter;