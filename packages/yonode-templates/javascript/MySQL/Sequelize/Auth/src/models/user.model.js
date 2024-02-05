import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';
const user = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // rest of your schema here

}, {
    freezeTableName: true,
    timestamps: false
});

export default user;



