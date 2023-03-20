import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { GlobalStyle, Wrapper } from "./Layout.style";
import {
    getAllProducts,
    savePurchasesArrToLocalStorage,
    saveLikedProductsArrToLocalStorage,
    amountOfBuyProduct
} from "../../store/actions";

export function Layout() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.buy.purchases, shallowEqual);
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);

    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

    useEffect(() => {
        dispatch(amountOfBuyProduct());
        dispatch(savePurchasesArrToLocalStorage());
    }, [products, dispatch]);

    useEffect(() => {
        dispatch(saveLikedProductsArrToLocalStorage());
    }, [likedProducts, dispatch]);

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <Outlet/>
            <Footer/>
        </Wrapper>
    );
}