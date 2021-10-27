import "./ContactCard.scss";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <img className="contact-photo" alt="Contact photo" src="https://randomuser.me/api/portraits/women/26.jpg"></img>

      <ul className="contact-info">
        <li><h4 className="name">Name</h4></li>
        <li className="phone-number">12345678</li>
        <li>New York</li>
      </ul>

    </div>
  )
}

export default ContactCard;