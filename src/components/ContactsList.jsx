import ContactCard from "./ContactCard";
import "./ContactsList.scss";

const ContactsList = () => {
  return(
    <>
    <section className="contacts-navigation">
      <form className="search-form">
        <label >Search: </label>
        <input className="search-input" type="text" placeholder="Type here to search"></input>
      </form>
      <button className="add-contact-btn"> Add contact </button>
    </section>

    <section className="contact-list">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </section>
    </>
  )
}

export default ContactsList;