import inquirer from "inquirer";
import { options } from "../../index.js";
import { authQuestion } from "../questions.js";
import { repoConditions } from "../repoConditions.js";

export const authType = () => {
  inquirer
    .prompt(authQuestion)
    .then((answer) => {
      options.auth = answer.auth_type;
      repoConditions()
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
};
