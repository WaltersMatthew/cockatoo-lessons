import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ onRemoveTodo, todoList }) {
    return (
        <ul>
            {todoList.map((todo) => {
                return (
                    <TodoListItem
                        onRemoveTodo={onRemoveTodo}
                        key={todo.id}
                        title={todo.fields.Title}
                        id={todo.id}
                    />
                );
            })}
        </ul>
    );
}
