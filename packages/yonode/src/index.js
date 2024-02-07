#!/usr/bin/env node

/**
 * Yonode
 * A Web Server Framework for Node.js
 *
 * @author Mr Sharafdin <isasharafdin@gmail.com>
 */

import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { languageType } from './lib/questions.js';
import './lib/programOptions.js'
import { databaseType } from './lib/db.js';

export const options = {
    language_type: '',
    database_type: '',
    orm_type: '',
    auth: false
}

const runCommand = command => {
    try {
        execSync(command, { stdio: 'inherit' })
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}

const cloneRepo = (repoName) => {
    const gitCheckoutCommand = `git clone --depth 1 https://github.com/sharafdin/yonode/tree/main/packages/yonode-templates/javascript/MongoDB/Mongoose/NoAuth ${repoName}`

    const installDepsCommand = `cd ${repoName} && npm install`

    console.log(`cloning the repository with name ${repoName}`);

    const checkOut = runCommand(gitCheckoutCommand)

    console.log(`installing dependencies for ${repoName}`);

    const installDeps = runCommand(installDepsCommand)

    console.log('Congratulations! you are ready. follow the commands to start');

    console.log(`cd ${repoName} && npm start`);
}

let repoName = process.argv[2]

if (!repoName) {
    console.log('please provide a repository name');
    inquirer.prompt(
        {
            type: "input",
            name: "repoName",
            message: "What is your project name?",
            default: 'yonode-app'
        },
    ).then(name => { repoName = name.repoName, main() })
} else {
    main()
}

function main() {
    inquirer
        .prompt(languageType)
        .then((answer) => {
            if (answer.language_type === 'JavaScript') {
                options.language_type = answer.language_type
                databaseType()
            } else {
                console.log('sorry, typescript is not available');
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}
