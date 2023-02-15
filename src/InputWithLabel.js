import { useEffect, useRef } from "react";

export default function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            <input
                ref={inputRef}
                id="todoTitle"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
            />
        </>
    );
}
