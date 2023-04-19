import React from "react";
import styles from "../css/TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ id, createdTime, onRemoveTodo, title }) {
    const dateSlicer = (date) => date.slice(5, 10);
    return (
        <>
            <li className={styles.listItem} key={id}>
                {title}
                <br />
                {dateSlicer(createdTime)}
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
