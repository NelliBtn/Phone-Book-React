import { useState } from 'react';
//components
import ContactsNavigation from './components/ContactsNavigation';
import NewContactForm from './components/NewContactForm';
import ContactsList from './components/ContactsList';
//styles
import './App.scss';



function App() {

  const [form, setForm] = useState(false);
  const showForm = () => {
    setForm(true);
  }
  return (
    <div className="app">
      <h1>My Phone Book</h1>
      <ContactsNavigation showForm={showForm} />
      {form && <NewContactForm />}
      <ContactsList />
    </div>
  );
}

export default App;
