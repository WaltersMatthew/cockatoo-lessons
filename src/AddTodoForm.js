import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
            >
                Title
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
