const mongoose = require("mongoose");

const CreatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const HistorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    }
});
const PhilosophySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    }
});

const ReviewSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

const RecipesSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        thumb:{
            type:String,
            required:true,
        },
        headerImg:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        ingredients:[
            {
                type:String,
                required: true
            }
        ],
        history:{
           type: HistorySchema,
           require:true
        },
        philosophy:{
            type:PhilosophySchema,
            require: true,
        },
        creator: {
            type: CreatorSchema,
            required: true
        },
        descriptionImgs:[
            {
                type:String,
                required: true
            }
        ],
        type:{
            type:String,
            required:true,
        },
        typeImg:{
            type:String,
            required:true,
        },
        reviews: [ReviewSchema] 
    },
    {
        collection:"Recipes",
        versionKey: false,
    }
);

module.exports = mongoose.model("Recipes", RecipesSchema);
