import React from "react";
import { Button } from "./Button.style";
import PropTypes from "prop-types";

class ButtonComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.props);
        if (this.props.handaleClick2) {
            this.props.handaleClick2();
        }
    }

    static defaultProps = {
        text: "Так",
        background: "#E0BEA2"
    };

    static propTypes = {
        headerBackgroundColor: PropTypes.string,
        onClick: PropTypes.func,
        header: PropTypes.string,
        text: PropTypes.string,
    };

    render() {
        return (
            <Button onClick={this.handleClick} backgroundColor={this.props.background}>
                {this.props.text}
            </Button>
        );
    }
}

export default ButtonComponent;

