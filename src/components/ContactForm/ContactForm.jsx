import nanoId from "nano-id";
import React from "react";
import styles from "./ContactForm.module.css";


class ContactForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            number: ""
        }
    }

    handleInputChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({ [name]: value })
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit({ ...this.state, id: nanoId() })
        this.setState({
             name: "",
            number: "" 
        })
    }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.onSubmit} className={styles.form}>
                <div className={styles.inputs_wrapper}>
                <label className={styles.label}>
                   <span>Name</span> 
                    <input onChange={this.handleInputChange} type="text" name="name" value={name} className={styles.input}  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
                </label>
                <label className={styles.label}>
                   <span>Number</span> 
                    <input onChange={this.handleInputChange} type="text" name="number" value={number}  className={styles.input}   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required/>
                    </label>
                    </div>
                <button className={styles.button} type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;