import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import TodoApp from "./components/TodoApp";
import NewsFeed from "./NewsFeed";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoApp />} exact></Route>
                <Route
                    path="/new"
                    element={<Link to={"/"}>back home</Link>}
                    exact
                ></Route>
                <Route path="/feed" element={<NewsFeed />} exact></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
