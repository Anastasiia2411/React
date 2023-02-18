import React from "react";
import ReactDOM from "react-dom/client";
import ButtonComponent from "./components/Button.js";
import Modal from "./components/Modal";
import { GlobalStyle, ButtonWrapper } from "./components/index.style";

const root = ReactDOM.createRoot(document.getElementById("root"));

class All extends React.Component {
    state = { openModalA: false, openModalB: false };

    constructor(props) {
        super(props);
        this.openModalA = this.openModalA.bind(this);
        this.openModalB = this.openModalB.bind(this);
        this.closeModalA = this.closeModalA.bind(this);
        this.closeModalB = this.closeModalB.bind(this);
        this.actionsButtonModalA = this.actionsButtonModalA.bind(this);
        this.actionsButtonModalB = this.actionsButtonModalB.bind(this);
    }

    openModalA() {
        this.setState({ ...this.state, openModalA: true });
    }

    openModalB() {
        this.setState({ ...this.state, openModalB: true });
    }

    closeModalA() {
        this.setState({ ...this.state, openModalA: false });
    }

    closeModalB() {
        this.setState({ ...this.state, openModalB: false });
    }

    actionsButtonModalA() {
        return (
            <>
                <ButtonComponent text={"Ok"} background={"#FF0000"} handleClick={this.closeModalA}/>
                <ButtonComponent text={"Cancel"} background={"#2986CC"} handleClick={this.closeModalA}/>
            </>
        );
    }

    actionsButtonModalB() {
        return (
            <>
                <ButtonComponent text={"Yes"} background={"#FF0000"} handleClick={this.closeModalB}/>
                <ButtonComponent text={"No"} background={"#2986CC"} handleClick={this.closeModalB}/>
            </>
        );
    }

    render() {
        return (
            <>
                <GlobalStyle/>
                <div>
                    <p>{this.state.openModalA}</p>
                    <ButtonWrapper>
                        <ButtonComponent text={"Open first modal"} background={"#FF0000"}
                                         handleClick={this.openModalA}/>
                        <ButtonComponent text={"Open second modal"} background={"#2986CC"}
                                         handleClick={this.openModalB}/>
                    </ButtonWrapper>
                    {this.state.openModalA &&
                        <Modal
                            headerBackgroundColor={"#FF0000"}
                            onClose={this.closeModalA}
                            header={"Do you wanna delete this file?"} closeButton={true}
                            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ducimus enim odit"}
                            actions={
                                this.actionsButtonModalA()
                            }
                        />}
                    {this.state.openModalB &&
                        <Modal onClose={this.closeModalB}
                               headerBackgroundColor={"#2986CC"}
                               header={"Do you wanna save this file?"} closeButton={true}
                               text={"Lorem  ducimus enim oditbrbrbr"}
                               actions={
                                   this.actionsButtonModalB()
                               }
                        />}
                </div>
            </>);

    }

}

root.render(
    <All/>
);



