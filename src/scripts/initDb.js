import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import CategoryController from '../controllers/categoryController.js';
import AlgorithmController from '../controllers/algorithmController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initializeDatabase() {
  try {
    // Read the algorithms.json file
    const data = await fs.readFile(
      path.join(__dirname, '../data/algorithms.json'),
      'utf8'
    );
    const jsonData = JSON.parse(data);

    // Add category
    console.log('Adding category...');
    const categoryId = await CategoryController.addCategory(
      jsonData.category.name,
      jsonData.category.description
    );
    console.log(`Category added with ID: ${categoryId}`);

    // Add algorithms
    console.log('Adding algorithms...');
    for (const algo of jsonData.algorithms) {
      const algorithmId = await AlgorithmController.addAlgorithm({
        categoryId,
        name: algo.name,
        description: algo.description,
        difficulty: algo.difficulty,
        template: algo.template,
        testCases: algo.testCases
      });
      console.log(`Algorithm "${algo.name}" added with ID: ${algorithmId}`);
    }

    console.log('Database initialization completed successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initializeDatabase(); 