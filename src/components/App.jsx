import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const checkedContacts = contacts.filter(contact => contact.name === name);
    if (checkedContacts.length >= 1) {
      alert(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactsList contactsList={visibleContacts}></ContactsList>
      </div>
    );
  }
}
