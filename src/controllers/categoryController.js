import CategoryModel from "../models/categoryModel.js";

class CategoryController {
  static async addCategory(name, description) {
    try {
      const categoryId = await CategoryModel.create(name, description);
      return categoryId;
    } catch (err) {
      throw err;
    }
  }

  static async listCategories() {
    try {
      const categories = await CategoryModel.getAll();
      return categories;
    } catch (err) {
      throw err;
    }
  }
}

export default CategoryController;
