import React, { useEffect, useState } from "react";
import privateAxios from "../../config/privateAxios";
import publicAxios from "../../config/publicAxios";

function TodoList() {
    const [todo, setTodo] = useState({
        nameTodo: "",
    });
    const [allTodo, setAllTodo] = useState([]);
    const handleAddTodo = async () => {
        if (!todo.id) {
            try {
                const response = await privateAxios.post("/todo", todo);
                listTodo();
                setTodo({
                    nameTodo: "",
                });
            } catch (error) {
                alert(error.response.data.message);
            }
        } else {
            try {
                const response = await privateAxios.put(`/todo/${todo.id}`, todo);
                listTodo();
                setTodo({
                    nameTodo: "",
                });
            } catch (error) {
                alert(error.response.data.message);
            }
        }
    };
    useEffect(() => {
        listTodo();
    }, []);

    const listTodo = async () => {
        try {
            const res = await publicAxios.get("/todo");
            setAllTodo(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDelete = async (id) => {
        if (confirm("Bạn có muốn xóa không?")) {
            try {
                const res = await privateAxios.delete(`/todo/${id}`);
                setAllTodo(res.data);
            } catch (error) {
                alert(error.response.data.message);
            }
        }

    };
    const handleEdit = async (item) => {
        console.log(item);
        setTodo(item);
    };

    return (
        <>
            <h1>Todolist</h1>
            <div>
                <input
                    value={todo.nameTodo}
                    type="text"
                    onChange={(e) => setTodo({ ...todo, nameTodo: e.target.value })}
                />
                <button onClick={handleAddTodo}>{todo.id ? "Save" : "Add"}</button>
            </div>
            <div>
                {allTodo.map((item, index) => (
                    <div key={index}>
                        {item.nameTodo}
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TodoList;
