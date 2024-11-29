// models/submissionModel.js

import db from "../services/databaseService.js";

class SubmissionModel {
  static async create({ algorithmId, solution, status }) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO submissions (algorithm_id, solution, status) VALUES (?, ?, ?)`,
        [algorithmId, solution, status],
        function (err) {
          if (err) return reject(err);
          resolve(this.lastID);
        }
      );
    });
  }

  static async getStatsByAlgorithm(algorithmId) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT status, COUNT(*) as count 
         FROM submissions 
         WHERE algorithm_id = ? 
         GROUP BY status`,
        [algorithmId],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }
}

export default SubmissionModel;
