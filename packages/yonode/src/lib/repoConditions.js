import { cloneRepo, options, projectName } from "../index.js";

export const repoConditions = () => {
  switch (true) {
    // JavaScript for NoAuth

    // NoDB
    case options.language_type === "JavaScript" &&
    options.database === false:
    cloneRepo(projectName, "JS-NoDB-Template");
    break;

    // MongoDB
    case options.language_type === "JavaScript" &&
      options.database_type === "MongoDB" &&
      options.orm_type === "Mongoose" &&
      options.auth === false:
      cloneRepo(projectName, "JS-MongoDB-Mongoose-NoAuth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MongoDB" &&
      options.orm_type === "Prisma" &&
      options.auth === false:
      cloneRepo(projectName, "JS-MongoDB-Prisma-NoAuth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MongoDB" &&
      options.orm_type === "TypeORM" &&
      options.auth === false:
      cloneRepo(projectName, "JS-MongoDB-TypeORM-NoAuth-Template");
      break;
    // MySQL
    case options.language_type === "JavaScript" &&
      options.database_type === "MySQL" &&
      options.orm_type === "Prisma" &&
      options.auth === false:
      cloneRepo(projectName, "JS-MySQL-Prisma-NoAuth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MySQL" &&
      options.orm_type === "Sequelize" &&
      options.auth === false:
      cloneRepo(projectName, "JS-MySQL-Sequelize-NoAuth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MySQL" &&
      options.orm_type === "TypeORM" &&
      options.auth === false:
      cloneRepo(projectName, "JS-MySQL-TypeORM-NoAuth-Template");
      break;
    // PostgreSQL
    case options.language_type === "JavaScript" &&
      options.database_type === "PostgreSQL" &&
      options.orm_type === "Prisma" &&
      options.auth === false:
      cloneRepo(projectName, "JS-PostgreSQL-Prisma-NoAuth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "PostgreSQL" &&
      options.orm_type === "Sequelize" &&
      options.auth === false:
      cloneRepo(projectName, "JS-PostgreSQL-Sequelize-NoAuth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "PostgreSQL" &&
      options.orm_type === "TypeORM" &&
      options.auth === false:
      cloneRepo(projectName, "JS-PostgreSQL-TypeORM-NoAuth-Template");
      break;

    // JavaScript for Auth

    // MongoDB
    case options.language_type === "JavaScript" &&
      options.database_type === "MongoDB" &&
      options.orm_type === "Mongoose" &&
      options.auth === true:
      cloneRepo(projectName, "JS-MongoDB-Mongoose-Auth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MongoDB" &&
      options.orm_type === "Prisma" &&
      options.auth === true:
      cloneRepo(projectName, "JS-MongoDB-Prisma-Auth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MongoDB" &&
      options.orm_type === "TypeORM" &&
      options.auth === true:
      cloneRepo(projectName, "JS-MongoDB-TypeORM-Auth-Template");
      break;
    // MySQL
    case options.language_type === "JavaScript" &&
      options.database_type === "MySQL" &&
      options.orm_type === "Prisma" &&
      options.auth === true:
      cloneRepo(projectName, "JS-MySQL-Prisma-Auth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MySQL" &&
      options.orm_type === "Sequelize" &&
      options.auth === true:
      cloneRepo(projectName, "JS-MySQL-Sequelize-Auth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "MySQL" &&
      options.orm_type === "TypeORM" &&
      options.auth === true:
      cloneRepo(projectName, "JS-MySQL-TypeORM-Auth-Template");
      break;
    // PostgreSQL
    case options.language_type === "JavaScript" &&
      options.database_type === "PostgreSQL" &&
      options.orm_type === "Prisma" &&
      options.auth === true:
      cloneRepo(projectName, "JS-PostgreSQL-Prisma-Auth-Template");
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "PostgreSQL" &&
      options.orm_type === "Sequelize" &&
      options.auth === true:
      cloneRepo(projectName, "JS-PostgreSQL-Sequelize-Auth-Template");
      console.log('This Template is Not Available right now!');
      break;
    case options.language_type === "JavaScript" &&
      options.database_type === "PostgreSQL" &&
      options.orm_type === "TypeORM" &&
      options.auth === true:
      cloneRepo(projectName, "JS-PostgreSQL-TypeORM-Auth-Template");
      break;

    default:
      throw new Error("unsupported option");
  }
};
