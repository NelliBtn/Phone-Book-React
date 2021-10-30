import { useState } from 'react';
//components
import ContactsNavigation from './components/ContactsNavigation';
import NewContactForm from './components/NewContactForm';
import ContactsList from './components/ContactsList';
//styles
import './App.scss';



function App() {

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
      image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      id: 3,
      name: "John",
      phone: "903-216-537",
      image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
  ]);

  const [form, setForm] = useState(false);
  const showForm = () => {
    setForm(true);
  }

  // add new contact function
  // allow to add add custom fields
  // delete contact function
  // record the history of changes
  // add search fucntion




  return (
    <div className="app">
      <h1>My Phone Book</h1>
      <ContactsNavigation showForm={showForm} />
      {form && <NewContactForm />}
      <ContactsList contacts={contacts}/>
    </div>
  );
}

export default App;
