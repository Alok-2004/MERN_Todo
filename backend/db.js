const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:alokprasad02004@cluster0.uuspnvg.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos' , todoSchema)

module.exports = {
    todo
}