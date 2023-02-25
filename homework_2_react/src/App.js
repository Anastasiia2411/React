import React from "react";
import { Header } from "./components/Header/Header";
import { GlobalStyle, Wrapper, } from "./App.style";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { ButtonsWrapper } from "./components/Modal/Modal.style";
import ButtonComponent from "./components/Modal/Button";
import { Modal } from "./components/Modal/Modal";

export const ThemeContext = React.createContext();
export const BuyContext = React.createContext();
const color = "#E0BEA2";

class App extends React.Component {
    state = {
        openModalA: false,
        likeArr: JSON.parse(localStorage.getItem("likeArr")) == null ? [] : JSON.parse(localStorage.getItem("likeArr")),
        buyArr: JSON.parse(localStorage.getItem("buyArr")) == null ? [] : JSON.parse(localStorage.getItem("buyArr")),
        tapBuy: null,
        buyArrFlag: true
    };

    constructor(props) {
        super(props);
        this.openModalA = this.openModalA.bind(this);
        this.closeModalA = this.closeModalA.bind(this);
        this.actionsButtonModalA = this.actionsButtonModalA.bind(this);
        this.addToLikedArr = this.addToLikedArr.bind(this);
        this.addToBuyArr = this.addToBuyArr.bind(this);
        this.buyArrFlagTrue = this.buyArrFlagTrue.bind(this);
        this.buyArrFlagFalse = this.buyArrFlagFalse.bind(this);
        this.delLikeEl = this.delLikeEl.bind(this);
    }

    addToLikedArr(item) {
        const itemExists = this.state.likeArr.some(({ article }) => article === item.article);
        this.setState({
            likeArr: itemExists
                ? this.state.likeArr.filter(({ article }) => article !== item.article)
                : [...this.state.likeArr, item]
        }, () => {
            localStorage.setItem("likeArr", JSON.stringify(this.state.likeArr));
        });
    }

    delLikeEl(article, type) {
        if (type === "likeList") {
            this.setState({ likeArr: this.state.likeArr.filter((el) => el.article !== article) }, () => {
                localStorage.setItem("likeArr", JSON.stringify(this.state.likeArr));
            });
        } else if (type === "buyList") {
            this.setState({ buyArr: this.state.buyArr.filter((el) => el.article !== article) }, () => {
                localStorage.setItem("buyArr", JSON.stringify(this.state.buyArr));
            });
        }
    }

    addToBuyArr(item) {
        const itemExists = this.state.buyArr.some(({ article }) => article === item.article);
        this.setState({
            buyArr: itemExists
                ? [...this.state.buyArr]
                : [...this.state.buyArr, item]
        }, () => {
            localStorage.setItem("buyArr", JSON.stringify(this.state.buyArr));
        });
    }

    buyArrFlagTrue() {
        this.setState({ buyArrFlag: true });
        if (this.state.buyArrFlag === true) {
            this.addToBuyArr(this.state.tapBuy);
        }
    }

    buyArrFlagFalse() {
        this.setState({ buyArrFlag: false }, () => {
            this.setState({ tapBuy: null });
        });
    }

    openModalA(props) {
        this.setState({ openModalA: true, tapBuy: props });
    }

    closeModalA() {
        this.setState({ openModalA: false });
    }

    actionsButtonModalA() {
        return (
            <ButtonsWrapper>
                <ButtonComponent text={"Так"}
                                 handleClick={this.closeModalA} handaleClick2={this.buyArrFlagTrue}
                                 background={color}/>
                <ButtonComponent text={"Ні"} background={color} handleClick={this.closeModalA}
                                 handaleClick2={this.buyArrFlagFalse}/>
            </ButtonsWrapper>
        );
    }

    render() {
        return (
            <BuyContext.Provider value={this.state.buyArr}>
                <ThemeContext.Provider value={this.state.likeArr}>
                    <GlobalStyle/>
                    <Wrapper>
                        <Header delEl={this.delLikeEl}/>
                        <Products
                            handleClick={this.openModalA}
                            tapBuy={this.addToBuyArr}
                            likedClick={this.addToLikedArr}
                        />
                        <Footer/>
                    </Wrapper>
                    {this.state.openModalA && (
                        <Modal
                            headerBackgroundColor={color}
                            onClose={this.closeModalA}
                            header={"Ви хочете додати цей товар до Вашого кошика?"} closeButton={false}
                            text={"Ви зможете переглянути всі вибрані товари у вкладенні 'Кошик'"}
                            actions={this.actionsButtonModalA()}
                        />
                    )}
                </ThemeContext.Provider>
            </BuyContext.Provider>
        );
    }
}

export default App;


