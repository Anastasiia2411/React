import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProductsWrapper } from "./Products.style.js";
import { ProductElement } from "./Product";
import { addToLikedProducts, addProductToPurchases } from "../../store/actions";

export function Products({ buttonText, onProductBuyButtonClick }) {
    const allProducts = useSelector(state => state.allProducts.allProducts, shallowEqual);
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const dispatch = useDispatch();

    const addToLikedProductsArr = item => {
        dispatch(addToLikedProducts(item));
    };

    const addToPurchasesArr = item => {
        dispatch(addProductToPurchases(item));
    };

    const isLiked = product => {
        return likedProducts.some(likedItem => likedItem.article === product.article);
    };

    return (
        <ProductsWrapper>
            {allProducts.map((product) => {
                return (
                    <ProductElement buttonText={buttonText}
                                    key={String(product.article)}
                                    product={product}
                                    likeArr={likedProducts}
                                    onBuyButtonClick={addToPurchasesArr}
                                    isLiked={isLiked(product)}
                                    onAddToLikedButtonClick={addToLikedProductsArr}
                                    handleButtonClick={onProductBuyButtonClick}
                    />
                );
            })}
        </ProductsWrapper>
    );
}