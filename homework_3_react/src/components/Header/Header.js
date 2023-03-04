import React from "react";

import { HeaderElementWrapper } from "./Header.style";
import { HeaderMenuList } from "./HeaderMenuList";
import { IconList } from "./HeaderIconList";
import { HeaderLogoSvg } from "./HeaderLogoSvg";

export function Header(props) {
    return (
        <>
            <HeaderElementWrapper>
                <HeaderMenuList/>
                <HeaderLogoSvg/>
                <IconList buyProductCount={props.amountOfBuyProduct} likedProductsCount={props.likedProductsCount}/>
            </HeaderElementWrapper>
        </>
    );
}





