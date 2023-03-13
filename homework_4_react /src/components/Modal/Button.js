import React from "react";

import { Button } from "./Button.style";

export function ButtonComponent(props) {
    const handleClick = (e) => {
        e.preventDefault();
        if (props.handleClick) {
            props.handleClick();
        }
    };
    return (
        <Button onClick={handleClick} backgroundColor={props.background}>
            {props.text}
        </Button>
    );
}


