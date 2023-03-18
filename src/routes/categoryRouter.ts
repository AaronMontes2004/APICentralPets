import { addCategoryValidation, findByIdCategoryValidation, updateCategoryValidation, changeStatusCategoryValidation } from './../middlewares/validations/categoryValidation';
import { getCategories, addCategory, updateCategory, findByIdCategory, changeStatusCategory } from './../controllers/categoryController';
import { Router } from 'express';

const categoryRouter: Router = Router();

categoryRouter.get("/", getCategories)

categoryRouter.post("/addCategory", addCategoryValidation, addCategory)

categoryRouter.put("/updateCategory/:idCategory", updateCategoryValidation, updateCategory)

categoryRouter.get("/findById/:idCategory", findByIdCategoryValidation, findByIdCategory)

categoryRouter.put("/changeStatus/:idCategory", changeStatusCategoryValidation, changeStatusCategory)

export default categoryRouter