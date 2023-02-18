import React from "react";
import {
    ModalWrapper,
    ModalHeader,
    DeleteButton,
    HeaderWrapper,
    ModalParagraph,
    BackgroundModal,
    ButtonsWrapper
} from "./Modal.style";

class Modal extends React.Component {

    render() {
        return (
            <div>
                <BackgroundModal onClick={() => {
                    this.props.onClose();
                }}>
                    <ModalWrapper onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <HeaderWrapper background={this.props.headerBackgroundColor}>
                            <ModalHeader>{this.props.header}</ModalHeader>
                            <DeleteButton onClick={() => {
                                this.props.onClose();
                            }}>{this.props.closeButton && "X"}</DeleteButton>
                        </HeaderWrapper>
                        <div>
                            <ModalParagraph>
                                {this.props.text}
                            </ModalParagraph>
                        </div>
                        <ButtonsWrapper>
                            {this.props.actions}
                        </ButtonsWrapper>
                    </ModalWrapper>
                </BackgroundModal>
            </div>
        );
    }

}

export default Modal;