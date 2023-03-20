import React from "react";
import { LikedHeader, LikedParagraph, ParagraphWrapper } from "./LikedPage.style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProductElement } from "../../components/Products/Product";
import { Modal } from "../../components/Modal/Modal";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import {
    addProductToPurchases,
    addToLikedProducts,
    addProductToBasketFromLikedProductsConfirmModal
} from "../../store/actions";

const color = "#E0BEA2";

export function LikedPage() {
    const dispatch = useDispatch();
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const likedProductConfirmModalItem = useSelector(state => state.likedPageAddProductToBasket.likedProductConfirmModalItem, shallowEqual);

    function addToPurchasesArr(item) {
        dispatch(addProductToPurchases(item));
    }

    function addToLikedProductsArr(item) {
        dispatch(addToLikedProducts(item));
    }

    function addProductToBasketFromLikedProductsConfirmModalDispatch(item) {

        console.log(likedProductConfirmModalItem);
        dispatch(addProductToBasketFromLikedProductsConfirmModal(item));
    }

    const addLikedProductToPurchasesAndCloseConfirmModal = () => {
        addToPurchasesArr(likedProductConfirmModalItem);
        addProductToBasketFromLikedProductsConfirmModalDispatch(null);
    };

    const closeLikedProductConfirmModalWithoutAddingProduct = () => {
        addProductToBasketFromLikedProductsConfirmModalDispatch(null);
    };

    return (
        <>
            <LikedHeader>Вподобане:</LikedHeader>
            <ParagraphWrapper>
                {
                    likedProducts.length > 0 ?
                        likedProducts.map((product) => {
                                return (
                                    <ProductElement product={product} key={product.article} buttonText={"Додати в корзину"}
                                                    isLiked={likedProducts.some(likedItem => likedItem.article === product.article)}
                                                    onAddToLikedButtonClick={addToLikedProductsArr}
                                                    handleButtonClick={addProductToBasketFromLikedProductsConfirmModalDispatch}
                                    />
                                );
                            }
                        ) : <LikedParagraph>Немає вподобаних товарів</LikedParagraph>
                }
                {likedProductConfirmModalItem && (
                    <Modal
                        headerBackgroundColor={color}
                        header="Ви хочете додати цей товар до Вашого кошика?"
                        closeButton={false}
                        text="Ви зможете переглянути всі вибрані товари у вкладенні 'Кошик'"
                        onClose={closeLikedProductConfirmModalWithoutAddingProduct}
                    >
                        <ButtonsWrapper>
                            <ButtonComponent
                                text="Так"
                                handleClick={addLikedProductToPurchasesAndCloseConfirmModal}
                                background={color}
                            />
                            <ButtonComponent
                                text="Ні"
                                handleClick={closeLikedProductConfirmModalWithoutAddingProduct}
                                background={color}
                            />
                        </ButtonsWrapper>
                    </Modal>
                )}
            </ParagraphWrapper>
        </>
    );
}