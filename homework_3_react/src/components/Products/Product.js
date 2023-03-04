import React from "react";

import { CountButton, Product, ProductList } from "./Products.style";
import { ButtonComponent } from "../Modal/Button";

export function ProductElement(props) {
   const handleButtonClick=()=>{
       props.handleButtonClick(props.product)
    }

    const plusItemCount = () => {
        props.onBuyButtonClick(props.product);
    };

    const minusItemCount = () => {
        props.onProductDeleteButtonClick(props.product);
    };

    return (
        <Product>
            <img
                src={props.product.photo || props.product.product.photo}
                alt="jacket"
                height="350"
            />
            <div onClick={() => {
                props.onAddToLikedButtonClick(props.product);
            }}>
                <svg viewBox="0 0 14 13" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"
                     stroke={props.isLiked ? "red" : "none"}>

                    <path
                        d="M6.93804 1.15962C8.47954 -0.224381 10.8617 -0.178444 12.3467 1.30925C13.8312 2.79759 13.8823 5.16792 12.5016 6.71402L6.93672 12.2868L1.37314 6.71402C-0.00758263 5.16792 0.0442603 2.79366 1.52801 1.30925C3.01439 -0.176476 5.39194 -0.22635 6.93804 1.15962ZM11.4175 2.23651C10.4332 1.25084 8.84506 1.21081 7.81477 2.13611L6.93869 2.92228L6.06196 2.13676C5.02839 1.21015 3.44357 1.25084 2.45659 2.23782C1.4788 3.21562 1.42958 4.78074 2.33059 5.81497L6.93738 10.429L11.5442 5.81563C12.4458 4.78074 12.3966 3.21759 11.4175 2.23651Z"
                        fill="white"/>
                </svg>
            </div>
            <ProductList>
                {
                    props.type ?

                        <li>
                            <CountButton onClick={minusItemCount}>-</CountButton>
                            кількість: {props.product.count}
                            <CountButton onClick={plusItemCount}>+</CountButton>
                        </li>

                        : null
                }
                <li>
                    {props.product.name || props.product.product.name}
                </li>
                <li>
                    {props.product.price || props.product.product.price}
                </li>
                <li>
                    article:{ props.product.article || props.product.product.article}
                </li>
                <li>
                    { props.product.color || props.product.product.color}
                </li>
                <li>
                    <ButtonComponent
                        text={props.buttonText}
                        background="#E0BEA2"
                        handleClick={handleButtonClick}
                    />
                </li>
            </ProductList>
        </Product>
    );
}
