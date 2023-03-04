import React from "react";
import { useOutletContext } from "react-router-dom";

import { ProductsWrapper } from "./Products.style.js";
import { ProductElement } from "./Product";

export function Products(props) {
    const { allProducts, likeArr, setLikeArr, addToLikedArr, amountOfBuyProduct,   addToBuyArr } = useOutletContext();
    return (
        <ProductsWrapper>
            {allProducts.map((product) => {
                return (
                    <ProductElement buttonText={props.buttonText}
                                    key={String(product.article)}
                                    product={product}
                                    likeArr={likeArr}
                                    setLikeArr={setLikeArr}
                                    onBuyButtonClick={addToBuyArr}
                                    isLiked={likeArr.some(likedItem => likedItem.article === product.article)}
                                    onAddToLikedButtonClick={addToLikedArr}
                                    amountOfBuyProduct={amountOfBuyProduct}
                                    handleButtonClick={props.onProductBuyButtonClick}
                    />
                );
            })}
        </ProductsWrapper>
    );
}