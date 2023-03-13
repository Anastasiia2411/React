import React, {useCallback, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProductElement } from "../../components/Products/Product";
import { Modal } from "../../components/Modal/Modal";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import { BuysHeader, BuysParagraph, BuysParagraphWrapper} from "./BuysPage.style";
import {
    removeProductFromPurchases,
    savePurchasesArrToLocalStorage,
    addProductToPurchases,
    addToLikedProducts,
    deleteConfirmModal,
} from "../../store/actions";

const color = "#E0BEA2";

export function BuysPage() {
    const dispatch = useDispatch();

    const removedCartItem = useSelector(state => state.deleteProductFromBasket.removedCartItem, shallowEqual);
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const purchases = useSelector(state => state.buy.purchases, shallowEqual);

    const openDeleteConfirmModalForProduct = (product) => {
        dispatch(deleteConfirmModal(product));
    };

    const addToPurchasesArr = useCallback((item) => {
        dispatch(addProductToPurchases(item));
    }, [dispatch]);

    const addToLikedProductsArr = useCallback((item) => {
        dispatch(addToLikedProducts(item));
    }, [dispatch]);

    const closeDeleteConfirmModalAndRemoveProductFromPurchases = useCallback(() => {
        dispatch(removeProductFromPurchases(removedCartItem));
        dispatch(deleteConfirmModal(null));
    }, [dispatch, removedCartItem]);

    useEffect(() => {
        dispatch(savePurchasesArrToLocalStorage());
    }, [purchases, dispatch]);

    const isLiked = (product) => {
        return likedProducts.some(likedItem => likedItem.article === product.article);
    };

    return (
        <>
            <BuysHeader>Хочу купити:</BuysHeader>
            <BuysParagraphWrapper>
                {purchases.length > 0 ? purchases.map((product) => {
                        return (
                            <ProductElement product={product}
                                            key={product.article}
                                            buttonText={"Видалити з корзини"}
                                            onProductDeleteButtonClick={openDeleteConfirmModalForProduct}
                                            onAddToLikedButtonClick={addToLikedProductsArr}
                                            isLiked={isLiked(product)}
                                            type={"basketProduct"}
                                            onBuyButtonClick={addToPurchasesArr}
                                            handleButtonClick={openDeleteConfirmModalForProduct}
                            />
                        );
                    }
                ) : <BuysParagraph>Немає товарів до покупки</BuysParagraph>}
                {removedCartItem && (
                    <Modal
                        headerBackgroundColor={color}
                        header="Ви хочете видалити цей товар з Вашого кошика?" closeButton={false}
                        text="Цей товар буде видалено з кошика"
                        onClose={() => {
                            dispatch(deleteConfirmModal(null));
                        }}
                        transitionName="modal"
                    >
                        <ButtonsWrapper>
                            <ButtonComponent
                                text="Так"
                                handleClick={closeDeleteConfirmModalAndRemoveProductFromPurchases}
                                background={color}
                            />
                            <ButtonComponent
                                text="Ні"
                                handleClick={() => {
                                    dispatch(deleteConfirmModal(null));
                                }}
                                background={color}
                            />
                        </ButtonsWrapper>
                    </Modal>
                )}
            </BuysParagraphWrapper>
        </>
    );
}