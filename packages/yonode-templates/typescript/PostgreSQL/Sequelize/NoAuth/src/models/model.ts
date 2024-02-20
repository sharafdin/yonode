import { Model } from "sequelize";
import sequelize from "../config/db.config";

interface modelAttributes {

}

interface modelType extends Model<modelAttributes>, modelAttributes{};

const  modelName = sequelize.define<modelType>("users",{
    // rest of your schema model here

})

export default modelName;