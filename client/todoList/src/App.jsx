import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import TodoList from "./components/todolist/TodoList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
