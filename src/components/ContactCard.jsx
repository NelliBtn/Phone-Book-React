import "./ContactCard.scss";

const ContactCard = ({name, image, phone, id, onDelete }) => {

  return (
    <div className="contact-card">
      <img className="contact-photo" alt="Contact photo" src={image}></img>

      <ul className="contact-info">
        <li><h4 className="name">{name}</h4></li>
        <li className="phone-number">{phone}</li>
        <li>New York</li>
      </ul>

      <button>Change</button>
      <button type='submit' onClick={(e) => onDelete(e, id)}>Delete</button>
      <button>History</button>

    </div>
  )
}

export default ContactCard;