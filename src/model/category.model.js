import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        require: true,
        uniq: true
    }  
},{
    collection: "category",
    timestamp: true,
    versionKey: false
})


export default mongoose.model("Category", CategorySchema)