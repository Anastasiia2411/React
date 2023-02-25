import React from "react";
import {
    LikedProductsWrapper,
    LikedProductsCloseBtn,
    LikedProductsHeader,
    LikedProductsText
} from "./Header.style";

import { LikedProductsInform } from "./LikedProductsInform";
import { ThemeContext } from "../../App";
import PropTypes from "prop-types";

export class LikeListModal extends React.Component {

    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        text: "Вподобане",
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {(value) => (
                    <LikedProductsWrapper>
                        <LikedProductsHeader>
                            <LikedProductsText>{this.props.text}</LikedProductsText>
                            <LikedProductsCloseBtn onClick={() => {
                                this.props.handleClick();
                            }}>X</LikedProductsCloseBtn>
                        </LikedProductsHeader>
                        {value.length > 0 ? value.map((e) => {
                            return <LikedProductsInform type={"likeList"} delEl={this.props.delEl} article={e.article} key={e.article} src={e.src} text={e.name} price={e.price}/>;
                        }) : <h3>Немає товарів які сподобались</h3>}

                    </LikedProductsWrapper>
                )}
            </ThemeContext.Consumer>
        );
    }
}





