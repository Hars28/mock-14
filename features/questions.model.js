const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
//    company:{type: String},
//    city:{type:String},
//    loc:{type:String},
//    role:{type:String},
//    level:{tpye:String},
//    pos:{type:String},
//    contract:{type:String},
//    language:{type:String},
//    postedAt:{type:String},


category:{type:String},
type:{type:String},
difficulty:{type:String,enum:["easy","medium","hard"]},
question:{type:String},
correct_answer:{type:String},
incorrect_answers:[{type:String}],

})

const Question = mongoose.model("question",questionSchema)
module.exports = Question;