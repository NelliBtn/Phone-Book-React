import { useState } from 'react';
//components
import ContactsNavigation from './components/ContactsNavigation';
import NewContactForm from './components/NewContactForm';
import ContactsList from './components/ContactsList';
//styles
import './App.scss';



function App() {

  // list of all existing contacts
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Mary",
      phone: "123-456-735",
      image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      id: 2,
      name: "Bob",
      phone: "783-226-885",
      image: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      id: 3,
      name: "John",
      phone: "903-216-537",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
  ]);

  // manupulating 'Create new contact' form
  const [form, setForm] = useState(false);
  const showForm = () => {
    setForm(true);
  }
  const hideForm = () => {
    setForm(false);
    setContact(initialContact);
    setError();
  }

  // set error when creating a new contact
  const [error, setError] = useState();

  // creating new contact
  const initialContact = {
    id: Date.now(),
    image: 'http://cdn.shopify.com/s/files/1/1061/1924/products/Flushed_Face_Emoji_grande.png?v=1571606037',
    name: '',
    phone: '',
    custom: ''
  }
  const [contact, setContact] = useState(initialContact)

  const addContact = (e) => {
    e.preventDefault();
    if (contact.name && contact.phone) {
      const newContacts = [...contacts, contact];
      setContacts(newContacts);
      setContact(initialContact);
      setForm(false);
      setError();
    } else {
      // show error
      setError('Fill out all required fields, please.')
    }
  }

  // delete contact
  const onDelete = (e, id) => {
    e.preventDefault();
    // create a copy of contacts
    const contactsCopy = [...contacts];
    // find a contact to delete by id
    const deleteContact = contactsCopy.find(contact => contact.id === id);
    const index = contactsCopy.indexOf(deleteContact);
    contactsCopy.splice(index, 1);
    setContacts([...contactsCopy]);
  }

  // allow to add add custom fields
  // delete contact function
  // record the history of changes
  // add search fucntion

  return (
    <div className="app">
      <h1>My Phone Book</h1>
      <ContactsNavigation showForm={showForm} form={form} />
      {form && <NewContactForm contact={contact} setContact={setContact} addContact={addContact} hideForm={hideForm} error={error}/>}
      <ContactsList contacts={contacts} onDelete={onDelete}/>
    </div>
  );
}

export default App;
