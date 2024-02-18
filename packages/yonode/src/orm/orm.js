import inquirer from "inquirer";
import { options } from "../index.js";
import { ormQuestion } from "../lib/questions.js";
import { authType } from "../lib/prompt/auth.js";

export const ormType = () => {
  inquirer
    .prompt(ormQuestion)
    .then((answer) => {
      if (answer.orm_type === "Sequelize") {
        options.orm_type = answer.orm_type;
        authType()
      } else if (answer.orm_type === "Prisma") {
        options.orm_type = answer.orm_type;
        authType()
      } else {
        options.orm_type = answer.orm_type;
        authType()
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
};
