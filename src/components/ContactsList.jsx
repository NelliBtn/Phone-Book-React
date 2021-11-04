import { useState } from 'react';
import ContactCard from "./ContactCard";
import "./ContactsList.scss";


const ContactsList = ({contacts, onDelete, setInitContact}) => {

  const contactsParsed = contacts.map(contact => {
    return (
      <ContactCard 
        key={contact.id}
        id={contact.id}
        image={contact.image}
        name={contact.name}
        phone={contact.phone}
        custom={contact.custom}
        onDelete={onDelete}
        setInitContact={setInitContact}
        contact={contact}
      />
    )
  })

  const display = contacts.length === 0 ? <h3>Your phone book is empty.</h3> : contactsParsed;

  return(
    <section className="contact-list"> {display} </section>
  )
}

export default ContactsList;