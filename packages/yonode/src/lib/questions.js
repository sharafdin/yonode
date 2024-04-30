export const languageType = {
    type: "list",
    name: "language_type",
    message: "Which language do you prefer?",
    choices: ["JavaScript", "TypeScript"],
    default: "JavaScript",
}

export const dbQuestion = [
    {
        type: "confirm",
        name: "dbQuestion",
        message: "Do you need database?",
    },
]

export const databaseQuestion = [
    {
        type: "list",
        name: "database_type",
        message: "Which database do you prefer?",
        choices: ["MongoDB", "MySQL", "PostgreSQL"],
        default: "MongoDB",
    },
]

export const mongodbOrmQuestion = [
    {
        type: "list",
        name: "mongodb_orm",
        message: "Which ORM do you prefer?",
        choices: ["Mongoose", "Prisma", "TypeORM"],
        default: "Mongoose",
    },
]

export const ormQuestion = [
    {
        type: "list",
        name: "orm_type",
        message: "Which ORM do you prefer?",
        choices: ["Sequelize", "Prisma", "TypeORM"],
        default: "Prisma",
    },
]

export const authQuestion = [
    {
        type: "confirm",
        name: "auth_type",
        message: "Do you prefer auth?",
    },
]