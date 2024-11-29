import sqlite3 from "sqlite3";

const db = new sqlite3.Database("algorithms.db");

db.serialize(() => {
  // Create categories table
  db.run(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
      )
    `);

  // Create algorithms table
  db.run(`
      CREATE TABLE IF NOT EXISTS algorithms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_id INTEGER,
        name TEXT NOT NULL,
        description TEXT,
        difficulty TEXT,
        template TEXT,
        test_cases TEXT,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      )
    `);

  // Create submissions table
  db.run(`
      CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        algorithm_id INTEGER,
        solution TEXT,
        status TEXT,
        submission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (algorithm_id) REFERENCES algorithms(id)
      )
    `);
});

export default db;
