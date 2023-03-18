import { addCategoryValidation, findByIdCategoryValidation, updateCategoryValidation } from './../middlewares/validations/categoryValidation';
import { getCategories, addCategory, updateCategory, findByIdCategory } from './../controllers/categoryController';
import { Router } from 'express';

const categoryRouter: Router = Router();

categoryRouter.get("/", getCategories)

categoryRouter.post("/addCategory", addCategoryValidation, addCategory)

categoryRouter.put("/updateCategory/:idCategory", updateCategoryValidation, updateCategory)

categoryRouter.get("/findById/:idCategory", findByIdCategoryValidation, findByIdCategory)

export default categoryRouter