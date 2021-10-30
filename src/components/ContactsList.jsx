import { useState } from 'react';
import ContactCard from "./ContactCard";
import "./ContactsList.scss";


const ContactsList = ({contacts}) => {

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

  return(
    <section className="contact-list"> {display} </section>
  )
}

export default ContactsList;