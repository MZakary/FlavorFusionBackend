const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        thumb:{
            type:String,
            required:true,
        }
    },
    {
        collection:"Gallery",
        versionKey: false,
    }
);

module.exports = mongoose.model("Gallery", GallerySchema);
