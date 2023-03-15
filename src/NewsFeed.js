import React from "react";
import { Link } from "react-router-dom";

function NewsFeed(props) {
    return (
        <div>
            <h1>This is the news feed!</h1>
            <button>
                <Link className="links" to={"/"}>
                    Home
                </Link>
                <a href="https://www.google.com/profile">google!</a>
            </button>
        </div>
    );
}

export default NewsFeed;
