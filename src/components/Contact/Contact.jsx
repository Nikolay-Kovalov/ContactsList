import React from "react";
import styles from "./Contact.module.css";

class Contact extends React.Component{

    render() {
        const{name,number,id,onDelete} = this.props
        return (
            <li className={styles.contact}>
                <div className={styles.wrapper_text}>
                    <p className={styles.name_text}>{name} </p>
                    <p className={styles.number_text}>{number}</p>
                    </div>
                <button onClick={()=>{onDelete(id)}} className={styles.button}>Delete</button>
            </li>
        )
    }
}

export default Contact;