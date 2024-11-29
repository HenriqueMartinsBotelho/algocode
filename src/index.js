import { Command } from "commander";
import {
  addCategoryCommand,
  listCategoriesCommand,
  addAlgorithmCommand,
} from "./cli/commands.js";

const program = new Command();

program
  .version("1.0.0")
  .description("CLI da Biblioteca de Prática de Algoritmos");

program
  .command("add-category")
  .description("Adicionar uma nova categoria")
  .action(addCategoryCommand);

program
  .command("list-categories")
  .description("Listar todas as categorias")
  .action(listCategoriesCommand);

program
  .command("add-algorithm")
  .description("Adicionar um novo algoritmo")
  .action(addAlgorithmCommand);

program.parse(process.argv);
