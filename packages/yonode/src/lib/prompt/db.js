import inquirer from 'inquirer'
import { mongodbOrm } from '../../orm/mongoDB.js';
import { ormType } from '../../orm/orm.js';
import { options } from '../../index.js';
import { databaseQuestion } from '../questions.js';

export const databaseType = () => {
    inquirer.prompt(
        databaseQuestion
    ).then(answer => {
        if (answer.database_type === 'MongoDB') {
            options.database_type = answer.database_type
            mongodbOrm()
        } else if (answer.database_type === 'MySQL') {
            options.database_type = answer.database_type
            ormType()
        }
        else {
            options.database_type = answer.database_type
            ormType()
        }
    })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}