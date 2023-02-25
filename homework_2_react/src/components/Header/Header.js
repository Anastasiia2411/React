import React from "react";
import {
    HeaderElementWrapper,
    ImageWrapper,
    ImageWrapperText,
    ImageWrapperParagraph
} from "./Header.style";
import { HeaderMenuList } from "./HeaderMenuList";
import { IconList } from "./HeaderIconList";
import { HeaderLogoSvg } from "./HeaderLogoSvg";
import PropTypes from "prop-types";

export class Header extends React.Component {

    static propTypes = {
        likeArr: PropTypes.array,
    };

    render() {
        return (
            <>
                <HeaderElementWrapper>
                    <HeaderMenuList/>
                    <HeaderLogoSvg/>
                    <IconList likeArr={this.props.likeArr} delEl={this.props.delEl}/>
                </HeaderElementWrapper>
                <ImageWrapper>
                    <ImageWrapperText>Знижки</ImageWrapperText>
                    <ImageWrapperParagraph>-10%</ImageWrapperParagraph>
                </ImageWrapper>
            </>
        );
    }
}




