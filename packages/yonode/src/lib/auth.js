import inquirer from "inquirer";
import { options } from "../index.js";
import { authQuestion } from "../lib/questions.js";

export const authType = () => {
  inquirer
    .prompt(authQuestion)
    .then((answer) => {
    options.auth = answer.auth_type;
    console.log(answer.transformer);
      console.log(options);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
};
