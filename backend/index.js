const express = require("express")
const { createTodo }= require("./types")
const{ updateTodo }= require("./types")
const { todo } = require("./db")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/todo" , async(req, res)=>{
    const createPayload = req.body;
    const parse = createTodo.safeParse(createPayload);
    if(!parse.success){
        res.status(411).json({
            message : "You have sent the Wrong inputs",
        })
        return;
    }

    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        message : "Task Created"
    })
})

// Get all the todos
app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});


app.put("/completed" , async(req, res)=>{
    const check = req.body
    const parse = updateTodo.safeParse(check);
    if(!parse.success){
        res.status(411).json({
            message : "Activity doesnt exists",
        })
        return
    }
    // update MongoDB
    await todo.update({
        id : req.body.id
    } , {
        completed : true
    })

    res.json({
        message : "Todo Completed"
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });