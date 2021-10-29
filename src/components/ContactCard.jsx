import "./ContactCard.scss";

const ContactCard = ({name, image, phone}) => {
  return (
    <div className="contact-card">
      <img className="contact-photo" alt="Contact photo" src={image}></img>

      <ul className="contact-info">
        <li><h4 className="name">{name}</h4></li>
        <li className="phone-number">{phone}</li>
        <li>New York</li>
      </ul>

      <button>Change</button>
      <button>Delete</button>
      <button>History</button>

    </div>
  )
}

export default ContactCard;