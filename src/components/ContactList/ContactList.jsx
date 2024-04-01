import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

class ContactList extends React.Component{
    render() {
        const { contacts, onDelete } = this.props;
        return (
        ( contacts.length > 0 ?  <ul className = { styles.contact_list } > {
                contacts.map(contact => {
                    return <Contact id={contact.id} onDelete={onDelete} key={contact.id} name={contact.name} number={contact.number} />
                })
            }</ul > : <p className={styles.not_found}>Contact not found</p>)
        )
    }
}
export default ContactList;