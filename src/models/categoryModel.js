import db from "../services/databaseService.js";

class CategoryModel {
  static async create(name, description) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO categories (name, description) VALUES (?, ?)",
        [name, description],
        function (err) {
          if (err) return reject(err);
          resolve(this.lastID);
        }
      );
    });
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM categories", (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
}

export default CategoryModel;
