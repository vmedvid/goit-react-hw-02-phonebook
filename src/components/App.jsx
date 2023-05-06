import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    let contactsList = this.state.contacts;
    if (contactsList.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      contactsList.push(newContact);
      this.setState({ contacts: contactsList });
    }
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleDeleteBtn = name => {
    let contactsList = this.state.contacts;
    let newContactlist = contactsList.filter(contact => contact.name !== name);
    this.setState({ contacts: newContactlist });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteBtn}
        />
      </div>
    );
  }
}
