import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // memanggil api untuk data todos
        fetch("http://localhost:8000/todos")
            .then((res) => {
                // jadikan json
                return res.json();
            })
            .then((data) => {
                // ketika rest api sukses, simpan data dari response ke state local
                setTodos(data);
            })
            .catch((err) => {
                // jika error kembalikan error
                if (err) throw err;
            });
    }, []);

    return (
        <ul id="todo-list">
            <ul id="todo-list">
                {todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} />;
                })}
            </ul>
        </ul>
    );
};

export default TodoList;
