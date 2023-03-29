import React from "react";
import styles from "./TodoListItem.module.css";

function TodoListItem({ id, onRemoveTodo, title }) {
    return (
        <>
            <li className={styles.listItem} key={id}>
                {title}
                <button
                    className={styles.remove}
                    onClick={() => onRemoveTodo(id)}
                >
                    Remove
                </button>
            </li>
        </>
    );
}

export default TodoListItem;
