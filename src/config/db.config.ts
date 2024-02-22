import { Sequelize } from "sequelize";
import { dbUrl } from "./initial.config";

const sequelize = new Sequelize(dbUrl);

export const connectDB = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("Connected to the database");
        await sequelize.sync();
        console.log("Model synced successfully");
    } catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);
    }
}

export default sequelize;