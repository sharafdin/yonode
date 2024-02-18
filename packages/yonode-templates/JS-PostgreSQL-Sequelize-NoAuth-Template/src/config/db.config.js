import { Sequelize } from 'sequelize';
import { dbUrl} from './initial.config.js'
import chalk from 'chalk';

const sequelize = new Sequelize(dbUrl);
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`${chalk.green.bold('Connected')}  to the database`);
        await sequelize.sync({ force: true });
        console.log(`${chalk.green.bold('Models synced')} successfully`);
    } catch (error) {
        console.log(`${chalk.red.bold('Error')} connecting to database`, error);
        process.exit(1);
    }
}

export default sequelize;
