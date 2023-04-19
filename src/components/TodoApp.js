import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "../css/TodoListItem.module.css";
import "../css/App.css";

function TodoApp() {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`;

    // append to url to sort alphabetically
    // &sort[0][field]=Title&sort[0][direction]=asc

    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ascending, setAscending] = useState(true);

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
                ascending
                    ? result.records.sort((a, b) => {
                          //   console.log(a);
                          if (a.createdTime < b.createdTime) return -1;
                          else if (a.createdTime === b.createdTime) return 0;
                          else return 1;
                      })
                    : result.records.sort((a, b) => {
                          if (a.createdTime < b.createdTime) return 1;
                          else if (a.createdTime === b.createdTime) return 0;
                          else return -1;
                      });
                setTodoList(result.records);
                setIsLoading(false);
            })
            .catch((error) => console.warn(error));
    }, [url, ascending]);

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
                <>
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
                            <label htmlFor="switch">
                                Switch ascending and descending
                            </label>
                            <input
                                id="switch"
                                type="checkbox"
                                checked={ascending}
                                onChange={() => setAscending(!ascending)}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default TodoApp;
