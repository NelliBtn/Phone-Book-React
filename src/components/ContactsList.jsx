import ContactCard from "./ContactCard";
import "./ContactsList.scss";

const ContactsList = () => {
  return(
    <>
    <h1>I am a list of Contacts:</h1>
    <div className="contact-list">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
    </>
  )
}

export default ContactsList;