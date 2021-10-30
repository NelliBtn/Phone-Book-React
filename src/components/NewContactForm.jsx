import { useState } from 'react';
import './NewContactForm.scss';

const NewContactForm = ({addContact, contact, setContact, hideForm}) => {

  const handleChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <section>
      <form className='new-contact-form' onSubmit={(e) => addContact(e)}>
        <div className='label-input-div'>
          <label>Name:</label>
          <input type='text' name='name' value={contact.name} onChange={handleChange} placeholder='Enter name'></input>
        </div>
        <div className='label-input-div'>
          <label>Phone:</label>
          <input type='tel' name='phone' value={contact.phone} onChange={handleChange} placeholder='Enter phone number'></input>
        </div>
        <div className='label-input-div'>
          <label>Custom:</label>
          <input type='text' name='custom' value={contact.custom} onChange={handleChange} placeholder='Enter whatever'></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-warning">Create</button>
        <button type="button" onClick={hideForm}className="btn btn-danger">Cancel</button>
      </form>
    </section>
  )
}

export default NewContactForm;