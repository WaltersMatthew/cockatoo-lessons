import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "./TodoListItem.module.css";
import "./App.css";

function TodoApp(props) {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

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
                // console.log(result.records);
                setTodoList(result.records);
                setIsLoading(false);
            })
            .catch((error) => console.warn(error));
    }, [url]);

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
            {isLoading ? (
                <div className={styles.loaderContainer}>
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className={styles.app}>
                    <div className={styles.input}>
                        <h1>To Do List</h1>
                        <AddTodoForm onAddTodo={addTodo} />
                    </div>
                    <div className={styles.list}>
                        <TodoList
                            onRemoveTodo={removeTodo}
                            todoList={todoList}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default TodoApp;
