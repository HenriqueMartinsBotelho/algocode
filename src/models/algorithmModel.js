// models/algorithmModel.js

import db from "../services/databaseService.js";

class AlgorithmModel {
  static async create({
    categoryId,
    name,
    description,
    difficulty,
    template,
    testCases,
  }) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO algorithms 
         (category_id, name, description, difficulty, template, test_cases) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          categoryId,
          name,
          description,
          difficulty,
          template,
          JSON.stringify(testCases),
        ],
        function (err) {
          if (err) return reject(err);
          resolve(this.lastID);
        },
      );
    });
  }

  static async getByCategory(categoryId) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM algorithms WHERE category_id = ?",
        [categoryId],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        },
      );
    });
  }

  static async getById(algorithmId) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM algorithms WHERE id = ?",
        [algorithmId],
        (err, row) => {
          if (err) return reject(err);
          resolve(row);
        },
      );
    });
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM algorithms", (err, row) => {
        if (err) return reject(err);
        resolve(row);
      });
    });
  }
}

export default AlgorithmModel;
