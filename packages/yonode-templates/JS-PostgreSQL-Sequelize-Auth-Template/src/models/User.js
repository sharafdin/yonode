import sequelize from '../config/dbConfig.js';
import { DataTypes } from 'sequelize';

// Define a schema for the user with email and password fields
const User = sequelize.define('User', {
    email:{
        type: DataTypes.STRING,
        allowNull: false, // Makes this field mandatory
        unique: true,  //  // Ensures email addresses are unique in the database
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, // Makes this field mandatory
    }
})

export default User;