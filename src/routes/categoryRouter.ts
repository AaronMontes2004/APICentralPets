import { addCategoryValidation, updateCategoryValidation } from './../middlewares/validations/categoryValidation';
import { getCategories, addCategory, updateCategory } from './../controllers/categoryController';
import { Router } from 'express';

const categoryRouter: Router = Router();

categoryRouter.get("/", getCategories)

categoryRouter.post("/addCategory", addCategoryValidation, addCategory)

categoryRouter.put("/updateCategory/:idCategory", updateCategoryValidation, updateCategory)

export default categoryRouter