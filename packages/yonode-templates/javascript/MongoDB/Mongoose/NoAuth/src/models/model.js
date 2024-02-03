import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaName = new Schema({

});

const modelName = model("modelName", schemaName);

export default modelName;