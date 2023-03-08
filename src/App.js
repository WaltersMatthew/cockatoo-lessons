import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
        };
        fetch(url, options)
            // fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
            .then((response) => response.json())

            .then((result) => {
                console.log(result.records);
                setTodoList(result.records);
                setIsLoading(false);
            })
            .catch((error) => console.warn(error));
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("savedTodoList", JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const removeTodo = (id) => {
        const filteredTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(filteredTodoList);
    };

    return (
        <>
            <h1>To Do List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
            )}
        </>
    );
}

export default App;
