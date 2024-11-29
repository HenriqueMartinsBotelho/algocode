// cli/prompts.js

import inquirer from "inquirer";

export async function promptCategoryDetails() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Digite o nome da categoria:",
      validate: (input) => input.length > 0 || "O nome não pode ser vazio.",
    },
    {
      type: "input",
      name: "description",
      message: "Digite a descrição da categoria:",
    },
  ]);
}

export async function promptAlgorithmDetails(categories) {
  return inquirer.prompt([
    {
      type: "list",
      name: "categoryId",
      message: "Selecione a categoria:",
      choices: categories.map((c) => ({ name: c.name, value: c.id })),
    },
    {
      type: "input",
      name: "name",
      message: "Digite o nome do algoritmo:",
      validate: (input) => input.length > 0 || "O nome não pode ser vazio.",
    },
    {
      type: "input",
      name: "description",
      message: "Digite a descrição do algoritmo:",
    },
    {
      type: "list",
      name: "difficulty",
      message: "Selecione o nível de dificuldade:",
      choices: ["Fácil", "Médio", "Difícil"],
    },
    {
      type: "editor",
      name: "template",
      message: "Digite o template do algoritmo (esqueleto da função):",
    },
    {
      type: "editor",
      name: "testCases",
      message: "Digite os casos de teste (array JSON):",
      validate: (input) => {
        try {
          JSON.parse(input);
          return true;
        } catch (e) {
          return "Por favor, insira um JSON válido.";
        }
      },
    },
  ]);
}

export async function promptSelectCategory(categories) {
  return inquirer.prompt([
    {
      type: "list",
      name: "categoryId",
      message: "Selecione a categoria:",
      choices: categories.map((c) => ({ name: c.name, value: c.id })),
    },
  ]);
}

export async function promptSelectAlgorithm(algorithms) {
  return inquirer.prompt([
    {
      type: "list",
      name: "algorithmId",
      message: "Selecione o algoritmo:",
      choices: algorithms.map((a) => ({ name: a.name, value: a.id })),
    },
  ]);
}

export async function promptSolutionInput() {
  return inquirer.prompt([
    {
      type: "editor",
      name: "solution",
      message: "Digite sua solução:",
    },
  ]);
}
