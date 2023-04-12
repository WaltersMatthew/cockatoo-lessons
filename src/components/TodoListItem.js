import React from "react";
import styles from "../css/TodoListItem.module.css";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
    id: PropTypes.string,
    onRemoveTodo: PropTypes.func,
    title: PropTypes.string,
};

export default TodoListItem;
