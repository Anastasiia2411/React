import React from "react";

import { ProductsWrapper } from "./Products.style.js";
import { ProductElement } from "./Product";
import { ThemeContext } from "../../App";
import PropTypes from "prop-types";

export class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ allProducts: [], addBagProducts: [] });
    }

    static propTypes = {
        name: PropTypes.func,
        price: PropTypes.string,
        src: PropTypes.string,
        tapBuy: PropTypes.func,
        article: PropTypes.string,
        color: PropTypes.string,
        likedClick: PropTypes.func,
        handleClick: PropTypes.func,
        handaleClick2: PropTypes.func,
    };

    async componentDidMount() {
        let informResponse = await fetch("./inform.json");
        let products = await informResponse.json();
        this.setState({ allProducts: products });
    }

    render() {
        return (
            <ProductsWrapper>
                <ThemeContext.Consumer>
                    {(likedArr) => this.state.allProducts.map((product) => {
                        return (
                            <ProductElement key={product.article.toString()}
                                            name={product.name}
                                            price={product.price}
                                            src={product.photo}
                                            tapBuy={this.props.tapBuy}
                                            handleClick={this.props.handleClick}
                                            article={product.article}
                                            likedClick={this.props.likedClick}
                                            color={product.color}
                                            isLiked={likedArr.some(likedItem => likedItem.article === product.article)}
                            />
                        );
                    })}
                </ThemeContext.Consumer>
            </ProductsWrapper>
        );
    }
}

