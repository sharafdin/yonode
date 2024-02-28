import bcryptjs from 'bcryptjs';
import sequelize from '../config/db.config.js';
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
// Hash the user's password before saving it to the database
User.beforeCreate( async (user , options) => {
    // Hash the password only if it has been modified
    if(user.changed('password')){
        // Generate a salt and hash the password
        const hashedPassword = await bcryptjs.hash(user.password,12);
        user.password = hashedPassword
    }
})

export default User;