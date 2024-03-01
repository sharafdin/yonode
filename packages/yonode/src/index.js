#!/usr/bin/env node

/**
 * Yonode
 * The Node.js Toolkit for Rapid Development.
 *
 * @author Mr Sharafdin <isasharafdin@gmail.com>
 */

import { execSync } from "child_process";
import fs from "fs";
import path, { basename } from "path";
import inquirer from "inquirer";
import "./lib/programOptions.js";
import { databaseType } from "./lib/prompt/db.js";
import { languageType } from "./lib/questions.js";

export const options = {
  language_type: "",
  database_type: "",
  orm_type: "",
  auth: false,
};

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};
let cloneDirectory = process.cwd();

export const cloneRepo = (projectName, branchName) => {
  let tempProjectName = basename(process.cwd());

  if (projectName === ".") {
    console.log(`cloning the repository with name ${tempProjectName}`);
  }

  const gitCloneCommand = `git clone --depth 1 -b ${branchName} https://github.com/sharafdin/yonode.git ${projectName}`;

  const gitClone = runCommand(gitCloneCommand);

  if (!gitClone) process.exit(1);

  if (projectName === ".") {
    const packageJsonPath = path.join(cloneDirectory, "package.json");
    const packageJson = fs.readFileSync(packageJsonPath).toString();

    const packageJsonData = JSON.parse(packageJson);

    packageJsonData["name"] = tempProjectName;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2));

    console.log("\nCongratulations! follow these commands:\n");
    console.log(`   npm install \n   npm start`);
  } else {
    cloneDirectory = path.join(process.cwd(), projectName);

    const packageJsonPath = path.join(cloneDirectory, "package.json");
    const packageJson = fs.readFileSync(packageJsonPath).toString();

    const packageJsonData = JSON.parse(packageJson);

    packageJsonData["name"] = projectName;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2));

    console.log("\nCongratulations! follow these commands:\n");
    console.log(`   cd ${projectName} \n   npm install \n   npm start`);
  }

  process.exit(1);
};

export let projectName = process.argv[2];

if (projectName === ".") {
  const files = fs.readdirSync(cloneDirectory);

  if (files.length) {
    console.log("The directory is not empty.");
    process.exit(1);
  }
}

if (!projectName) {
  console.log("please provide a repository name");
  inquirer
    .prompt({
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      default: "yonode-app",
    })
    .then((name) => {
      if (name.projectName === ".") {
        const files = fs.readdirSync(cloneDirectory);

        if (files.length) {
          console.log("The directory is not empty.");
          process.exit(1);
        }
        (projectName = name.projectName), main();
      } else {
        (projectName = name.projectName), main();
      }
    });
} else {
  main();
}

function main() {
  inquirer
    .prompt(languageType)
    .then((answer) => {
      if (answer.language_type === "TypeScript") {
        console.log(
            "Currently, TypeScript is unavailable. Expect its launch in v1.5.0. \nFor more info, visit: https://docs.yonode.org."
        );
        process.exit(0);
      }
      options.language_type = answer.language_type;
      databaseType();
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}
