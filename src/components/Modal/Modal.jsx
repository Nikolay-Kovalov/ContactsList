import React from "react";
import styles from "./Modal.module.css"

class Modal extends React.Component{
    onEscapeClose = (evt) => {
        if (evt.code === "Escape") {
            this.props.onclick();
        }
    } 

    componentDidMount() {
        window.addEventListener('keydown', this.onEscapeClose)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscapeClose)
    }
    render() {
        const{children, text, onclick, onBackdropClick} = this.props
        return <div onClick={(e) => {onBackdropClick(e)}} className={styles.backdrop}>
            <div className={styles.modal}>
                {children}
                <button onClick={onclick} className={styles.modal_button} type="button">{text}</button>
            </div>
        </div>
    }
}

export default Modal;