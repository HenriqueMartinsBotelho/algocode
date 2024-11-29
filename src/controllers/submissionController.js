// controllers/submissionController.js

import SubmissionModel from "../models/submissionModel.js";
import AlgorithmController from "./algorithmController.js";
import ValidationService from "../services/validationService.js";

class SubmissionController {
  static async submitSolution(algorithmId, solution) {
    try {
      // Obter o algoritmo e seus casos de teste
      const algorithm = await AlgorithmController.getAlgorithmById(algorithmId);
      const testCases = JSON.parse(algorithm.test_cases);

      // Validar a solução
      const status = ValidationService.validateSolution(solution, testCases);

      // Salvar a submissão
      const submissionId = await SubmissionModel.create({
        algorithmId,
        solution,
        status,
      });

      return { submissionId, status };
    } catch (err) {
      throw new Error("Erro ao submeter a solução: " + err.message);
    }
  }

  static async getSubmissionStats(algorithmId) {
    try {
      const stats = await SubmissionModel.getStatsByAlgorithm(algorithmId);
      return stats;
    } catch (err) {
      throw new Error("Erro ao obter as estatísticas: " + err.message);
    }
  }
}

export default SubmissionController;
