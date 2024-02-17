import mongoose from "mongoose";

interface typeName {
    
  }

const { Schema, model } = mongoose;

const schemaName = new Schema<typeName>({

});

const modelName = model<typeName>("modelName", schemaName);

export default modelName;