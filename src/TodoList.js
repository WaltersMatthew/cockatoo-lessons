import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
    const todoList = [
        { id: 1, title: "complete Assignment" },
        { id: 2, title: "feed the dogs" },
        { id: 3, title: "go skateboarding" },
    ];

    return (
        <ul>
            {todoList.map((item) => {
                return <TodoListItem key={item.id} title={item.title} />;
            })}
        </ul>
    );
}
