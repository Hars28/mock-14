const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const questionRouter = require("./features/questions.router")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())
app.use("/question",questionRouter)
mongoose.connect("mongodb+srv://harsh:harsh@cluster0.mflch7u.mongodb.net/mock-14?retryWrites=true&w=majority").then(()=>{
    app.listen(8080, () => {
        console.log("Server started")
    })
})
