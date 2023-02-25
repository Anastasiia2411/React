import { LikedProductsInformContainer, LikedProductsPhoto, ProductButton } from "./Header.style";
import React from "react";
import PropTypes from "prop-types";

export class LikedProductsInform extends React.Component {

    static propTypes = {
        src: PropTypes.string,
        price: PropTypes.string,
        text: PropTypes.string,
    };

    render() {
        return (
            <LikedProductsInformContainer>
                <LikedProductsPhoto
                    src={this.props.src} alt=""/>
                <h4>{this.props.text}</h4>
                <p>{this.props.price}</p>
                <ProductButton onClick={() => {
                    this.props.delEl(this.props.article, this.props.type);
                }}>X</ProductButton>
            </LikedProductsInformContainer>
        );
    }
}


