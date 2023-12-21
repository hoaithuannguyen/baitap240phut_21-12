const dataBase = require("../config/database");

async function addTodos(nameTodo) {
    const [result] = await dataBase.execute("insert into todoList (nameTodo) values (?)", [
        nameTodo,
    ]);
    return result;
}
async function renderTodo(nameTodo) {
    const [result] = await dataBase.execute("select * from todoList");
    console.log(result);
    return result;
}
async function deleteTodo(id) {
    const [result] = await dataBase.execute("delete from todoList where id = ?", [id]);
    return result;
}
async function updateTodo(nameTodo, id) {
    const [result] = await dataBase.execute(
        "update todoList set nameTodo = ? where id = ?",
        [nameTodo, id]
    );
    return result;
}

module.exports = {
    addTodos,
    renderTodo,
    deleteTodo,
    updateTodo,
};
