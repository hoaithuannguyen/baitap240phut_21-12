const {
    addTodos,
    renderTodo,
    deleteTodo,
    updateTodo,
} = require("../repository/todolist.repo");

async function addTodo(req, res) {
    const { nameTodo } = req.body;
    await addTodos(nameTodo);
    res.status(201).json({
        message: "Admin them thanh cong",
    });
}
async function renderTodoList(req, res) {
    const result = await renderTodo();
    res.status(200).json(result);
}
async function deleteTodoList(req, res) {
    const { id } = req.params;
    await deleteTodo(id);
    const result = await renderTodo();
    res.status(200).json(result);
}
async function updateTodoList(req, res) {
    // console.log(req.params.id);
    const { id } = req.params;
    const { nameTodo } = req.body;
    // console.log(nameTodo);
    const result = await updateTodo(nameTodo, id);
    console.log(result);
    res.status(200).json(result);
}

module.exports = {
    addTodo,
    renderTodoList,
    deleteTodoList,
    updateTodoList,
};
