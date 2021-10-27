import ContactCard from "./ContactCard";
import "./ContactsList.scss";

const ContactsList = () => {
  return(
    <>
    <h1>I am a list of Contacts:</h1>

    <section className="contacts-navigation">
      <form className="search-form">
        <label >Search: </label>
        <input type="text" placeholder="Type here to search"></input>
      </form>
      <button className="add-contact-btn"> Add new contact </button>
    </section>



    <section className="contact-list">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </section>
    </>
  )
}

export default ContactsList;