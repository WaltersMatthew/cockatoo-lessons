import React from "react";

function TodoListItem({ id, onRemoveTodo, title }) {
    return (
        <>
            <li key={id}>
                {title}
                <button onClick={() => onRemoveTodo(id)}>Remove</button>
            </li>
        </>
    );
}

export default TodoListItem;
