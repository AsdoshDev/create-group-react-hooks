import React from 'react';
import './modal.styles.scss';
import { ModalContext } from '../../util/context';

export const Modal = props => {
    return (
        <ModalContext.Consumer>
            {context => {
                if (context.showModal) {
                    return (
                        <div className="modal">
                            {/* <span id="close" onClick={context.toggleModal}>X</span> */}
                            {props.children}
                        </div>
                    );
                }

                return null;
            }}
        </ModalContext.Consumer>
    )
}