import React from "react";
import {
    ModalWrapper,
    ModalHeader,
    DeleteButton,
    HeaderWrapper,
    ModalParagraph,
    BackgroundModal,
    ButtonsWrapper,
    ModalContainer
} from "./Modal.style";
import PropTypes from "prop-types";

export class Modal extends React.Component {

    static propTypes = {
        onClick: PropTypes.func,
        background: PropTypes.string,
        text: PropTypes.string,
        actions: PropTypes.object,
        closeButton: PropTypes.bool,
    };

    static defaultProps = {
        text: "Ви зможете переглянути всі вибрані товари у вкладенні \"Кошик\"",
        closeButton: false,
    };

    render() {
        return (
            <ModalContainer>
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
            </ModalContainer>
        );
    }
}

