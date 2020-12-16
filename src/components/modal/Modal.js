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
                            {props.children}
                            <button onClick={context.toggleModal}>Hide Me</button>
                        </div>
                    );
                }

                return null;
            }}
        </ModalContext.Consumer>
    )
}