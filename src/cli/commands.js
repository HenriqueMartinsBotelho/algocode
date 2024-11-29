import inquirer from "inquirer";
import CategoryController from "../controllers/categoryController.js";
import chalk from "chalk";

export async function addCategoryCommand() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Digite o nome da categoria:",
      validate: (input) => input.length > 0,
    },
    {
      type: "input",
      name: "description",
      message: "Digite a descrição da categoria:",
    },
  ]);

  try {
    const categoryId = await CategoryController.addCategory(
      answers.name,
      answers.description
    );
    console.log(
      chalk.green(`Categoria adicionada com sucesso com ID: ${categoryId}`)
    );
  } catch (error) {
    console.error(chalk.red("Erro ao adicionar categoria:", error.message));
  }
}

export async function addAlgorithmCommand() {
  try {
    const categories = await CategoryController.listCategories();
    const answers = await promptAlgorithmDetails(categories);

    const algorithmId = await AlgorithmController.addAlgorithm({
      categoryId: answers.categoryId,
      name: answers.name,
      description: answers.description,
      difficulty: answers.difficulty,
      template: answers.template,
      testCases: JSON.parse(answers.testCases),
    });

    console.log(
      chalk.green(`Algoritmo adicionado com sucesso com ID: ${algorithmId}`)
    );
  } catch (error) {
    console.error(chalk.red("Erro ao adicionar algoritmo:", error.message));
  }
}

export async function listCategoriesCommand() {
  try {
    const categories = await CategoryController.listCategories();
    console.log(chalk.blue("\nCategorias Disponíveis:"));
    categories.forEach((category) => {
      console.log(chalk.yellow(`\nID: ${category.id}`));
      console.log(`Nome: ${category.name}`);
      console.log(`Descrição: ${category.description}`);
    });
  } catch (error) {
    console.error(chalk.red("Erro ao listar categorias:", error.message));
  }
}
