import React, { useState } from "react";
import { Portal } from "react-portal";
import './dialog.css';
import FocusTrap from 'focus-trap-react';
export interface dialogProps {
    title: JSX.Element | string,
    closeFunc: () => void,
    children: JSX.Element
}

/**
 * Custom dialog window
 */
export function Dialog( { title, closeFunc, children }: dialogProps ) {

    const [isVisible, setVisibility] = useState(true);
    const handleClose = () => {
        closeFunc();
        setVisibility(false);
    }

    return isVisible ? (
        <Portal node={document.getElementById('dialogContainer')} >
            <div className={`dialogWindow`}>
                <div className="dialogHeader">{title}</div>
                {children}
                <button className="crossButton" onClick={handleClose}>X</button>
            </div>
        </Portal>
    ) : null;
}