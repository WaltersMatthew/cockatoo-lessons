import React from "react";

function AddTodoForm(props) {
    const handleAddTodo = (e) => {
        e.preventDefault();
        let todoTitle = e.target.elements.title.value;
        console.log("howdy", e.target.elements.title.value);
        props.onAddTodo(todoTitle);
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
