// services/validationService.js

class ValidationService {
  static validateSolution(solution, testCases) {
    try {
      // Criar uma função executável a partir da string da solução
      const solutionFunc = new Function("return " + solution)();

      // Executar todos os casos de teste
      for (const testCase of testCases) {
        const result = solutionFunc(...testCase.input);
        if (!this.areEqual(result, testCase.expected)) {
          return "FAILED";
        }
      }
      return "PASSED";
    } catch (err) {
      return "ERROR";
    }
  }

  static areEqual(result, expected) {
    if (Array.isArray(result) && Array.isArray(expected)) {
      return JSON.stringify(result) === JSON.stringify(expected);
    }
    return result === expected;
  }
}

export default ValidationService;
