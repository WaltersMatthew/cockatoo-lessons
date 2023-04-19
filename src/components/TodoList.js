import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

export default function TodoList({ onRemoveTodo, todoList }) {
    return (
        <ul>
            {todoList.map((todo) => {
                return (
                    <TodoListItem
                        onRemoveTodo={onRemoveTodo}
                        key={todo.id}
                        createdTime={todo.createdTime}
                        title={todo.fields.Title}
                        id={todo.id}
                    />
                );
            })}
        </ul>
    );
}

TodoList.propTypes = {
    onRemoveTodo: PropTypes.func,
    todoList: PropTypes.array,
};
