import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { ProductElement } from "../../components/Products/Product";
import { Modal } from "../../components/Modal/Modal";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import { BuysHeader, BuysParagraph, BuysParagraphWrapper } from "./BuysPage.style";

const color = "#E0BEA2";

export function BuysPage() {
    const [deleteFromBasketConfirmModal, setDeleteFromBasketConfirmModal] = useState(null);
    const {
        likeArr,
        addToLikedArr,
        removeFromBuyArr,
        buyArr,
        addToBuyArr,
    } = useOutletContext();
    const deleteFromBasketConfirmModalOpen = (product) => {
        setDeleteFromBasketConfirmModal(product);
    };

    const deleteFromBasketConfirmModalClose = () => {
        removeFromBuyArr(deleteFromBasketConfirmModal);
        setDeleteFromBasketConfirmModal(null);
    };

    return (
        <>
            <BuysHeader>Хочу купити:</BuysHeader>
            <BuysParagraphWrapper>
                {buyArr.length > 0 ? buyArr.map((product) => {
                        return (
                            <ProductElement product={product}
                                            key={product.article}
                                            buttonText={"Видалити з корзини"}
                                            onProductDeleteButtonClick={deleteFromBasketConfirmModalOpen}
                                            onAddToLikedButtonClick={addToLikedArr}
                                            isLiked={likeArr.some(likedItem => likedItem.article === product.article)}
                                            type={"basketProduct"}
                                            onBuyButtonClick={addToBuyArr}
                                            handleButtonClick={deleteFromBasketConfirmModalOpen}
                            />
                        );
                    }
                ) : <BuysParagraph>Немає товарів до покупки</BuysParagraph>}
                {deleteFromBasketConfirmModal && (
                    <Modal
                        headerBackgroundColor={color}
                        header="Ви хочете видалити цей товар з Вашого кошика?" closeButton={false}
                        text="Цей товар буде видалено з кошика"
                        onClose={() => {
                            setDeleteFromBasketConfirmModal(null);
                        }}
                    >
                        <ButtonsWrapper>
                            <ButtonComponent
                                text="Так"
                                handleClick={deleteFromBasketConfirmModalClose}
                                background={color}
                            />
                            <ButtonComponent
                                text="Ні"
                                handleClick={() => {
                                    setDeleteFromBasketConfirmModal(null);
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