import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const modelName = sequelize.define('modelName', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // rest of your schema here

}, {
    freezeTableName: true,
    timestamps: false
});

export default modelName;