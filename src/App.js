import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '', 
      isExist: false,
      existedName: '',
    }
  }



  componentDidMount() {

      const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
       this.setState({contacts: parsedContacts})
    }
     
  
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  onAddContact = (contact) => {
const exist = this.state.contacts.find(item => item.name === contact.name) 
    if (exist) {
      this.setState({ isExist: true })
      this.setState({existedName: contact.name})
    } else {
      this.setState((prevState) => {
        this.setState({isExist: false})
      return { contacts: [contact, ...prevState.contacts ] }
    })}
  }

  onFilter = (value) => {
    this.setState({ filter: value })
  }

  onDeleteContact = (id) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts.filter(item => item.id !== id)] }
    })
          localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }

  closeModal = () => {
  this.setState({isExist: false})
  }
  
  onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
  this.closeModal()
}
  }

  visibleContacts = () => {
    const{contacts, filter} = this.state
    const normilizedValue = filter.toLowerCase()
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normilizedValue)
    }
   )
  }

  render() {
    const visible = this.visibleContacts()
      return (
        <div className="app">
          <div className="wrapper">
          <h1 className='title'>Contact Form</h1>
          <ContactForm onSubmit={this.onAddContact} />
            <Filter onFilter={this.onFilter} />
          </div>

          <div className='contacts_wrapper'>
            <h2 className="title_contacts">Contacts</h2>
            <ContactList onDelete={this.onDeleteContact} contacts={visible} />
            {this.state.isExist && <Modal onBackdropClick={this.onBackdropClick} onclick={this.closeModal} text={"Ok"}>
              <p className='modal_text'>{this.state.existedName} is already in your contacts</p>
              </Modal>}
            </div>
    </div>
  );
  }
}

export default App;
