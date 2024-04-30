import inquirer from "inquirer";
import { options } from "../../index.js";
import { dbQuestion } from "../questions.js";
import { repoConditions } from "../repoConditions.js";
import { databaseType } from "./dbType.js";

export const databaseConfirmQuestion = () => {
  inquirer
    .prompt(dbQuestion)
    .then((answer) => {
      if (answer.dbQuestion === true) {
        databaseType();
      } else if(answer.dbQuestion === false) {
        options.database = answer.dbQuestion;
        repoConditions();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
};
