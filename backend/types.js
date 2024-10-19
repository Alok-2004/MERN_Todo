// WIll be used for Data type checking
/*
body{
    title : string
    description : string
}
*/

const zod = require("zod")

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    title : zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}