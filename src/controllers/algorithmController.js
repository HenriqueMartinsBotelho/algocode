// controllers/algorithmController.js

import AlgorithmModel from "../models/algorithmModel.js";

class AlgorithmController {
  static async addAlgorithm(details) {
    try {
      const algorithmId = await AlgorithmModel.create(details);
      return algorithmId;
    } catch (err) {
      throw new Error("Erro ao adicionar o algoritmo: " + err.message);
    }
  }

  static async getAlgorithmsByCategory(categoryId) {
    try {
      const algorithms = await AlgorithmModel.getByCategory(categoryId);
      return algorithms;
    } catch (err) {
      throw new Error("Erro ao obter algoritmos: " + err.message);
    }
  }

  static async getAlgorithmById(algorithmId) {
    try {
      const algorithm = await AlgorithmModel.getById(algorithmId);
      return algorithm;
    } catch (err) {
      throw new Error("Erro ao obter o algoritmo: " + err.message);
    }
  }

  static async getAllAlgorithms() {
    try {
      const algorithms = await AlgorithmModel.getAll();
      return algorithms;
    } catch (err) {
      throw new Error("Erro ao obter o algoritmo: " + err.message);
    }
  }
}

export default AlgorithmController;
