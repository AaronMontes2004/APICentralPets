import { addProductValidation, addProductValidationAndroid, changeStatusProductValidation, findByIdProductValidation, updateProductValidation } from './../middlewares/validations/productValidation';
import { getProducts, addProduct, updateProduct, findByIdProduct, changeStatusProduct, addProductAndroid } from './../controllers/productController';
import { Router } from 'express';
import upload from './../libs/configMulter';

const productRouter: Router = Router()

productRouter.get("/", getProducts)

productRouter.post("/addProduct", upload.single("imageProduct"), addProductValidation, addProduct)

productRouter.post("/android/addProduct", addProductValidationAndroid, addProductAndroid)

productRouter.put("/updateProduct/:idProduct", updateProductValidation, updateProduct)

productRouter.get("/findById/:idProduct", findByIdProductValidation, findByIdProduct)

productRouter.put("/changeStatus/:idProduct", changeStatusProductValidation, changeStatusProduct)

export default productRouter;