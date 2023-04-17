import { findByIdCategoryValidation } from './../middlewares/validations/categoryValidation';
import { addProductValidation, addProductValidationAndroid, changeStatusProductValidation, findByIdProductValidation, updateProductValidation } from './../middlewares/validations/productValidation';
import { getProducts, addProduct, updateProduct, findByIdProduct, changeStatusProduct, addProductAndroid, updateProductAndroid, findProductsByIdCategory, filterProductsByName } from './../controllers/productController';
import { Router } from 'express';
import upload from './../libs/configMulter';

const productRouter: Router = Router()

productRouter.get("/", getProducts)

productRouter.post("/addProduct", upload.single("imageProduct"), addProductValidation, addProduct)

productRouter.post("/android/addProduct", addProductValidationAndroid, addProductAndroid)

productRouter.put("/updateProduct/:idProduct", updateProductValidation, updateProduct)

productRouter.put("/android/updateProduct/:idProduct", updateProductValidation, updateProductAndroid)

productRouter.get("/findById/:idProduct", findByIdProductValidation, findByIdProduct)

productRouter.get("/findByIdCategory/:idCategory", findByIdCategoryValidation, findProductsByIdCategory)

productRouter.put("/changeStatus/:idProduct", changeStatusProductValidation, changeStatusProduct)

productRouter.get("/filter/:productName", filterProductsByName)

export default productRouter;