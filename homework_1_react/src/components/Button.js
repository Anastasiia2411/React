import React from "react";
import { Button } from "./Button.style";

class ButtonComponent extends React.Component {
    render() {
        return (
            <Button onClick={() => {
                this.props.handleClick();
            }} backgroundColor={this.props.background}>
                {this.props.text}
            </Button>
        );
    }
}

export default ButtonComponent;


