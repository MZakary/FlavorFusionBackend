const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const index = express();

const Gallery = require("./models/Gallery");
const Recipes = require("./models/Recipes");

index.use(express.json());
index.use(cors());

index.get("/gallery", (req, res)=>{
    Gallery.find().then((gallery) => {
        res.json(gallery);
    }).catch((err)=>{
        console.error("Can't get Gallery" + err);
        res.status(500).json({err: "Erreur de Marcus"})
    })
});

index.get("/recipes", (req, res)=>{
    Recipes.find().then((recipes) => {
        res.json(recipes);
    }).catch((err)=>{
        console.error("Can't get Recipes" + err);
        res.status(500).json({err: "Erreur de Marcus"})
    })
});


index.get("/gallery/:id", (req, res)=>{
    const id = req.params.id;
    Gallery.findById(id).then((gallery) => {
        res.json(gallery);
    }).catch((err)=>{
        console.error("Can't get Gallery id" + err);
        res.status(500).json({err: "Erreur de Marcus"})
    })
});

index.get("/recipes/:id", (req, res)=>{
    const id = req.params.id;
    Recipes.findById(id).then((recipes) => {
        res.json(recipes);
    }).catch((err)=>{
        console.error("Can't get Recipes id" + err);
        res.status(500).json({err: "Erreur de Marcus"})
    })
});

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connected to Database");
    index.listen(3000, ()=>{
        console.log("Listening to 3000");
    });
}).catch((err)=>{
    console.error("Not Working, fucking Marcus: " + err );
})