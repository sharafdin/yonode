import { cloneRepo, options, projectName } from "../index.js";

export const repoConditions = () => {

    switch (true) {
        // MongoDB
        case options.language_type === 'JavaScript' && options.database_type === 'MongoDB' && options.orm_type === 'Mongoose' && options.auth === false:
            cloneRepo(projectName, 'JS-MongoDB-Mongoose-NoAuth-Template');
            break;
        case options.language_type === 'JavaScript' && options.database_type === 'MongoDB' && options.orm_type === 'Prisma' && options.auth === false:
            cloneRepo(projectName, 'JS-MongoDB-Prisma-NoAuth-Template');
            break;
        case options.language_type === 'JavaScript' && options.database_type === 'MongoDB' && options.orm_type === 'TypeORM' && options.auth === false:
            cloneRepo(projectName, 'JS-MongoDB-TypeORM-NoAuth-Template');
            break;
        // MySQL
        case options.language_type === 'JavaScript' && options.database_type === 'MySQL' && options.orm_type === 'Prisma' && options.auth === false:
            cloneRepo(projectName, 'JS-MySQL-Prisma-NoAuth-Template');
        case options.language_type === 'JavaScript' && options.database_type === 'MySQL' && options.orm_type === 'Sequelize' && options.auth === false:
            cloneRepo(projectName, 'JS-MySQL-Sequelize-NoAuth-Template');
        case options.language_type === 'JavaScript' && options.database_type === 'MySQL' && options.orm_type === 'TypeORM' && options.auth === false:
            cloneRepo(projectName, 'JS-MySQL-TypeORM-NoAuth-Template');
        // PostgreSQL
        case options.language_type === 'JavaScript' && options.database_type === 'PostgreSQL' && options.orm_type === 'Prisma' && options.auth === false:
            cloneRepo(projectName, 'JS-PostgreSQL-Prisma-NoAuth-Template');
        case options.language_type === 'JavaScript' && options.database_type === 'PostgreSQL' && options.orm_type === 'Sequelize' && options.auth === false:
            cloneRepo(projectName, 'JS-PostgreSQL-Sequelize-NoAuth-Template');
        case options.language_type === 'JavaScript' && options.database_type === 'PostgreSQL' && options.orm_type === 'TypeORM' && options.auth === false:
            cloneRepo(projectName, 'JS-MySQL-TypeORM-NoAuth-Template');
            break;
        default:
            throw new Error ('unsupported option') 
    }
}
