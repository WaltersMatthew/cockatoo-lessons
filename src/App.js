import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";

const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("savedTodoList"))
    );

    useEffect(() => {
        localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

    return [todoList, setTodoList];
};

function App() {
    const [todoList, setTodoList] = useSemiPersistentState();

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const removeTodo = (id) => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    };

    return (
        <>
            <h1>To Do List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
        </>
    );
}

export default App;
