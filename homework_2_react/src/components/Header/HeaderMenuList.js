import React from "react";
import { HeaderListLink, HeaderList } from "./Header.style";

export class HeaderMenuList extends React.Component {
    render() {
        return (
                <HeaderList>
                    <li>
                        <HeaderListLink>
                            NEW
                        </HeaderListLink>
                    </li>
                    <li>
                        <HeaderListLink>
                            КАТАЛОГ
                        </HeaderListLink>
                    </li>
                    <li>
                        <HeaderListLink>
                            ПРО НАС
                        </HeaderListLink>
                    </li>
                </HeaderList>
        );
    }
}