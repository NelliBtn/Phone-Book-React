import ContactCard from "./ContactCard";
import "./ContactsList.scss";

const ContactsList = () => {
  return(
    <>
    <h1>I am a list of Contacts:</h1>
    
    <section>
      <form>
        <label >Search: </label>
        <input type="text" placeholder="Type here to search"></input>
      </form>
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