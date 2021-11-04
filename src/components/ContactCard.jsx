import { useState } from 'react';
import ChangeForm from './ChangeForm'
import "./ContactCard.scss";

const ContactCard = ({name, image, phone, id, custom, onDelete, contact, setInitContact }) => {

  const [changeForm, setChangeForm] = useState(false);
  const handleChange = () => {
    // e.preventDefault();
    setChangeForm(true);
  }

  return (
    <div className="contact-card">
      {changeForm && (
        <ChangeForm contact={contact} setInitContact={setInitContact}/>
      )}
      {!changeForm && (
        <>
        <img className="contact-photo" alt="Contact photo" src={image}></img>
  
        <ul className="contact-info">
          <li><h4 className="name">{name}</h4></li>
          <li className="phone-number">{phone}</li>
            <li className="custom">{custom}</li>
        </ul>
  
        <button type='submit' onClick={handleChange}>Change</button>
        <button type='submit' onClick={(e) => onDelete(e, id)}>Delete</button>
        <button>History</button>
        </>

      )}

    </div>
  )
}

export default ContactCard;