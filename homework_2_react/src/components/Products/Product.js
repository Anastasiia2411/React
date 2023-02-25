import React from "react";
import { Product, ProductList } from "./Products.style";
import ButtonComponent from "../Modal/Button";
import PropTypes from "prop-types";

export class ProductElement extends React.Component {

    static propTypes = {
        onClick: PropTypes.func,
        src: PropTypes.string,
        alt: PropTypes.string,
        height: PropTypes.string,
        price: PropTypes.string,
        article: PropTypes.string,
        color: PropTypes.string,
        background: PropTypes.string,
        props: PropTypes.object,
        text: PropTypes.string,
        handaleClick2: PropTypes.func,
    };

    render() {
        return (
            <Product>
                <img src={this.props.src}
                     alt="jacket" height="350"/>
                <div onClick={() => {
                    this.props.likedClick({
                        name: this.props.name,
                        src: this.props.src,
                        article: this.props.article,
                        key: this.props.article,
                        price: this.props.price
                    });
                }}>
                    <svg viewBox="0 0 14 13" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"
                         stroke={this.props.isLiked ? "red" : "none"}>

                        <path
                            d="M6.93804 1.15962C8.47954 -0.224381 10.8617 -0.178444 12.3467 1.30925C13.8312 2.79759 13.8823 5.16792 12.5016 6.71402L6.93672 12.2868L1.37314 6.71402C-0.00758263 5.16792 0.0442603 2.79366 1.52801 1.30925C3.01439 -0.176476 5.39194 -0.22635 6.93804 1.15962ZM11.4175 2.23651C10.4332 1.25084 8.84506 1.21081 7.81477 2.13611L6.93869 2.92228L6.06196 2.13676C5.02839 1.21015 3.44357 1.25084 2.45659 2.23782C1.4788 3.21562 1.42958 4.78074 2.33059 5.81497L6.93738 10.429L11.5442 5.81563C12.4458 4.78074 12.3966 3.21759 11.4175 2.23651Z"
                            fill="white"/>
                    </svg>
                </div>
                <ProductList>
                    <li>
                        {this.props.name}
                    </li>
                    <li>
                        {this.props.price}
                    </li>
                    <li>
                        article:{this.props.article}
                    </li>
                    <li>
                        {this.props.color}
                    </li>
                    <li>
                        <ButtonComponent text={"Додати у кошик"} background={"#E0BEA2"}
                                         props={{
                                             name: this.props.name,
                                             src: this.props.src,
                                             price: this.props.price,
                                             article: this.props.article
                                         }} handleClick={this.props.handleClick}
                        />
                    </li>
                </ProductList>
            </Product>
        );
    }
}

