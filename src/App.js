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
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      custom: 'New York'
    },
    {
      id: 2,
      name: "Bob",
      phone: "783-226-885",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      custom: "bob123@gmail.com"
    },
    {
      id: 3,
      name: "John",
      phone: "903-216-537",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      custom: "electrician"
    },
  ]);
  
  // default empty contact
  const emptyContact = {
    id: Date.now(),
    image: 'http://cdn.shopify.com/s/files/1/1061/1924/products/Flushed_Face_Emoji_grande.png?v=1571606037',
    name: '',
    phone: '',
    custom: ''
  }
  const [initContact, setInitContact] = useState(emptyContact)

  // manupulating 'Create new contact' form
  const [form, setForm] = useState(false);
  const showForm = () => {
    setForm(true);
  }
  const hideForm = () => {
    setForm(false);
    setInitContact(emptyContact);
    setError();
  }

  // set error when creating a new contact
  const [error, setError] = useState();

  // create new contact
  const addContact = (e) => {
    e.preventDefault();
    if (initContact.name && initContact.phone) {
      const newContacts = [...contacts, initContact];
      setContacts(newContacts);
      setInitContact(emptyContact);
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
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...filteredContacts])
  }

  // allow to add add custom fields
  // allow to change a contact
  // record the history of changes
  // add search fucntion

  return (
    <div className="app">
      <h1>My Phone Book</h1>
      <ContactsNavigation showForm={showForm} form={form} />
      {form && <NewContactForm initContact={initContact} setInitContact={setInitContact} addContact={addContact} hideForm={hideForm} error={error}/>}
      <ContactsList contacts={contacts} onDelete={onDelete} setInitContact={setInitContact}/>
    </div>
  );
}

export default App;
