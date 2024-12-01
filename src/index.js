import { Command } from "commander";
import {
  addCategoryCommand,
  listCategoriesCommand,
  addAlgorithmCommand,
  listAllAlgorithms,
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

program
  .command("list-all-algorithms")
  .description("Listar todos os algoritmos")
  .action(listAllAlgorithms);

program.parse(process.argv);
