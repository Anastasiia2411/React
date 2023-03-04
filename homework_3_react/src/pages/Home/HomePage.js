import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Products } from "../../components/Products/Products";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import { Modal } from "../../components/Modal/Modal";
import { ImageWrapper, ImageWrapperParagraph, ImageWrapperText } from "../../components/Header/Header.style";

const color = "#E0BEA2";

export function HomePage() {
    const [buyConfirmModalProduct, setBuyConfirmModalProduct] = useState(null);
    const { addToBuyArr } = useOutletContext();

    const closeBuyConfirmModalAndAddProduct = () => {
        addToBuyArr(buyConfirmModalProduct);
        setBuyConfirmModalProduct(null);
    };
    const closeBuyConfirmModalAndAddNotAddProduct = () => {
        setBuyConfirmModalProduct(null);
    };

    return (
        <>
            <ImageWrapper>
                <ImageWrapperText>Знижки</ImageWrapperText>
                <ImageWrapperParagraph>-10%</ImageWrapperParagraph>
            </ImageWrapper>
            <Products buttonText={"Додати в корзину"} onProductBuyButtonClick={setBuyConfirmModalProduct} />
            {buyConfirmModalProduct && (
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
        </>
    );

}
