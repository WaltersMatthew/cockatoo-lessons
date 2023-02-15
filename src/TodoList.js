import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ onRemoveTodo, todoList }) {
    return (
        <ul>
            {todoList.map((item) => {
                return (
                    <TodoListItem
                        onRemoveTodo={onRemoveTodo}
                        key={item.id}
                        title={item.title}
                        id={item.id}
                    />
                );
            })}
        </ul>
    );
}
