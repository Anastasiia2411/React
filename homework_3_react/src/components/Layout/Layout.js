import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { GlobalStyle, Wrapper } from "./Layout.style";

export function Layout() {
    const [allProducts, setAllProducts] = useState([]);
    const [buyArr, setBuyArr] = useState(() => {
        return JSON.parse(localStorage.getItem("buyArr")) == null
            ? []
            : JSON.parse(localStorage.getItem("buyArr"));
    });

    const amountOfBuyProduct = useMemo(() => (
        buyArr.reduce((acc, product) => acc + product.count, 0)
    ), [buyArr]);

    const [likeArr, setLikeArr] = useState(() => {
        return JSON.parse(localStorage.getItem("likeArr")) == null
            ? []
            : JSON.parse(localStorage.getItem("likeArr"));
    });

    const addToBuyArr = useCallback((item) => {
        const itemExists = buyArr.some((obj) => {
            return obj.article === item.article;
        });
        if (itemExists) {
            setBuyArr(buyArr.map((product) => {
                if (product.article !== item.article) {
                    return product;
                }
                return {
                    ...product,
                    count: product.count + 1,
                };
            }));
        } else {
            setBuyArr([...buyArr, { ...item, count: 1 }]);
        }
    }, [buyArr, setBuyArr]);



    const removeFromBuyArr = useCallback((item) => {
        if (item.count === 1) {
            setBuyArr(buyArr.filter((el) => {
                return el.article !== item.article;
            }));
        } else if (item.count > 1) {
            setBuyArr(buyArr.map((el) => {
                if (el.article !== item.article) {
                    return el;
                }
                return {
                    ...el,
                    count: el.count - 1,
                };
            }));
        }
    }, [buyArr, setBuyArr]);

    const addToLikedArr = useCallback((el) => {
        const itemExists = likeArr.some(({ article }) => article === el.article);
        setLikeArr(
            itemExists
                ? likeArr.filter(({ article }) => article !== el.article)
                : [...likeArr, el]
        );
    }, [likeArr, setLikeArr]);

    useEffect(() => {
        async function fetchData() {
            const informResponse = await fetch("./inform.json");
            const products = await informResponse.json();
            setAllProducts(products);
        }

        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("buyArr", JSON.stringify(buyArr));
    }, [buyArr]);

    useEffect(() => {
        localStorage.setItem("likeArr", JSON.stringify(likeArr));
    }, [likeArr]);

    const outletContext = useMemo(() => ({
        allProducts,
        buyArr,
        likeArr,
        amountOfBuyProduct,
        addToBuyArr,
        removeFromBuyArr,
        addToLikedArr,
    }), [addToLikedArr, amountOfBuyProduct, allProducts, addToBuyArr, removeFromBuyArr, buyArr, likeArr]);

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header amountOfBuyProduct={amountOfBuyProduct} likedProductsCount={likeArr.length}/>
            <Outlet context={outletContext}/>
            <Footer/>
        </Wrapper>
    );
}