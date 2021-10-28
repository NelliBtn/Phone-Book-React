import { useState } from 'react';

import ContactCard from "./ContactCard";
import "./ContactsList.scss";

const ContactsList = () => {

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

  const contactsParsed = contacts.map(contact => {
    return (
      <ContactCard 
        key={contact.id}
        image={contact.image}
        name={contact.name}
        phone={contact.phone}
      />
    )
  })

  const display = contacts.length === 0 ? <h3>Your phone book is empty.</h3> : contactsParsed;

  // add new contact function
  // allow to add add custom fields
  // delete contact function
  // record the history of changes
  // add search fucntion


  return(
    <>
    <section className="contacts-navigation">
      <form className="search-form">
        <label >Search: </label>
        <input className="search-input" type="text" placeholder="Type here to search"></input>
      </form>
      <button className="add-contact-btn"> Add contact </button>
    </section>

    <section className="contact-list"> {display} </section>
    </>
  )
}

export default ContactsList;