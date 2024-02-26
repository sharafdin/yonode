import { Model } from "sequelize";
import sequelize from "../config/db.config";

interface modelAttributes {

}

interface modelType extends Model<modelAttributes> , modelAttributes{}

const modelName = sequelize.define<modelType>("modelName",{

})

export default modelName;