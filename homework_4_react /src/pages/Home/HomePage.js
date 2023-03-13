import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Products } from "../../components/Products/Products";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import { Modal } from "../../components/Modal/Modal";
import { ImageWrapper, ImageWrapperParagraph, ImageWrapperText } from "../../components/Header/Header.style";
import { addProductToPurchases, BuyConfirmModalOpen } from "../../store/actions";

const color = "#E0BEA2";

export function HomePage() {

    const dispatch = useDispatch();
    const addedCartItem = useSelector(state => state.buyConfirmModal.addedCartItem, shallowEqual);

    function addToPurchasesArr(item) {
        dispatch(addProductToPurchases(item));
    }

    const addToConfirmModal = item => {
        dispatch(BuyConfirmModalOpen(item));
    };

    const addProductAndCloseBuyConfirmModal = () => {
        addToPurchasesArr(addedCartItem);
        dispatch(BuyConfirmModalOpen(null));
    };

    const closeBuyConfirmModalWithoutAddingProduct = () => {
        dispatch(BuyConfirmModalOpen(null));
    };

    return (
        <>
            <ImageWrapper>
                <ImageWrapperText>Знижки</ImageWrapperText>
                <ImageWrapperParagraph>-10%</ImageWrapperParagraph>
            </ImageWrapper>
            <Products buttonText={"Додати в корзину"} onProductBuyButtonClick={addToConfirmModal}/>
            {addedCartItem && (
                <Modal
                    headerBackgroundColor={color}
                    header="Ви хочете додати цей товар до Вашого кошика?"
                    closeButton={false}
                    text="Ви зможете переглянути всі вибрані товари у вкладенні 'Кошик'"
                    onClose={closeBuyConfirmModalWithoutAddingProduct}
                >
                    <ButtonsWrapper>
                        <ButtonComponent
                            text="Так"
                            handleClick={addProductAndCloseBuyConfirmModal}
                            background={color}
                        />
                        <ButtonComponent
                            text="Ні"
                            handleClick={closeBuyConfirmModalWithoutAddingProduct}
                            background={color}
                        />
                    </ButtonsWrapper>
                </Modal>
            )}
        </>
    );

}
