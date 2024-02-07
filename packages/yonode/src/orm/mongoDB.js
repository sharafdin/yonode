import inquirer from 'inquirer'
import { options } from '../index.js';
import { mongodbOrmQuestion } from '../lib/questions.js';
import { authType } from '../lib/auth.js';

export const mongodbOrm = () => {
    inquirer.prompt(
        mongodbOrmQuestion
    ).then(answer => {
        if (answer.mongodb_orm === 'Mongoose') {
            options.orm_type = answer.mongodb_orm
            authType()
        } else if (answer.mongodb_orm === 'Prisma') {
            options.orm_type = answer.mongodb_orm
            console.log('Prisma');
        }
        else {
            options.orm_type = answer.mongodb_orm
            console.log('TypeORM');
        }
    })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}