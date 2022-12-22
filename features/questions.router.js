const express = require("express")
const Question = require("./questions.model")
const app = express.Router();

app.get("/", async(req,res)=>{
    let lim = req.query.lim || 5;
    let category = req.query.category;
    let difficulty = req.query.difficulty;
    try{
        let resp = await Question.find({category:category,difficulty:difficulty}).limit(lim)
        return res.status(200).send(resp)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})

module.exports = app;