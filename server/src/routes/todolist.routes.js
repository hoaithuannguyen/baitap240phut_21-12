const {
    addTodo,
    renderTodoList,
    deleteTodoList,
    updateTodoList,
} = require("../controllers/todolist.controllers");

const { validation } = require("../middleware/validation");
const { token } = require("../middleware/token");

const todoRouter = (app) => {
    app.post("/todo", token, validation, addTodo);
    app.get("/todo", renderTodoList);
    app.delete("/todo/:id", token, deleteTodoList);
    app.put("/todo/:id", token, updateTodoList);
};

module.exports = {
    todoRouter,
};
