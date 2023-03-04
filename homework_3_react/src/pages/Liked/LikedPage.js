import React, { useState } from "react";
import { LikedHeader, LikedParagraph, ParagraphWrapper } from "./LikedPage.style";
import { useOutletContext } from "react-router-dom";

import { ProductElement } from "../../components/Products/Product";
import { Modal } from "../../components/Modal/Modal";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";

const color = "#E0BEA2";

export function LikedPage() {
    const { likeArr, addToLikedArr, addToBuyArr } = useOutletContext();
    const [likedProductBuyConfirmModal, setLikedProductBuyConfirmModal] = useState(null);

    const closeBuyConfirmModalAndAddProduct = () => {
        addToBuyArr(likedProductBuyConfirmModal);
        setLikedProductBuyConfirmModal(null);
    };
    const closeBuyConfirmModalAndAddNotAddProduct = () => {
        setLikedProductBuyConfirmModal(null);
    };

    return (
        <>
            <LikedHeader>Вподобане:</LikedHeader>
            <ParagraphWrapper>
                {
                    likeArr.length > 0 ?
                        likeArr.map((product) => {
                                return (
                                    <ProductElement product={product} key={product.article} buttonText={"Додати в корзину"}
                                                    isLiked={likeArr.some(likedItem => likedItem.article === product.article)}
                                                    onAddToLikedButtonClick={addToLikedArr}
                                                    handleButtonClick={setLikedProductBuyConfirmModal}
                                    />
                                );
                            }
                        ) : <LikedParagraph>Немає вподобаних товарів</LikedParagraph>
                }
                {likedProductBuyConfirmModal && (
                    <Modal
                        headerBackgroundColor={color}
                        header="Ви хочете додати цей товар до Вашого кошика?"
                        closeButton={false}
                        text="Ви зможете переглянути всі вибрані товари у вкладенні 'Кошик'"
                        onClose={closeBuyConfirmModalAndAddNotAddProduct}
                    >
                        <ButtonsWrapper>
                            <ButtonComponent
                                text="Так"
                                handleClick={closeBuyConfirmModalAndAddProduct}
                                background={color}
                            />
                            <ButtonComponent
                                text="Ні"
                                handleClick={closeBuyConfirmModalAndAddNotAddProduct}
                                background={color}
                            />
                        </ButtonsWrapper>
                    </Modal>
                )}
            </ParagraphWrapper>
        </>
    );
}