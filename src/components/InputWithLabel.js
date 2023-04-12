import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

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

InputWithLabel.propTypes = {
    children: PropTypes.string,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
};
