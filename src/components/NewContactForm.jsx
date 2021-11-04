import { useState } from 'react';
import './NewContactForm.scss';

const NewContactForm = ({addContact, initContact, setInitContact, hideForm, error}) => {

  // set current contact on change
  const handleChange = (e) => {
    e.preventDefault();
    setInitContact({
      ...initContact,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <section className="new-contact-section">
      <form className='new-contact-form' onSubmit={(e) => addContact(e)}>
        <div className='label-input-div'>
          <label>Name:</label>
          <input type='text' name='name' value={initContact.name} onChange={handleChange} placeholder='Enter name'></input>
        </div>
        <div className='label-input-div'>
          <label>Phone:</label>
          <input type='tel' name='phone' value={initContact.phone} onChange={handleChange} placeholder='Enter phone number'></input>
        </div>
        <div className='label-input-div'>
          <label>Custom:</label>
          <input type='text' name='custom' value={initContact.custom} onChange={handleChange} placeholder='Enter whatever'></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-warning">Create</button>
        <button type="button" onClick={hideForm}className="btn btn-danger">Cancel</button>
      </form>
      {error &&<h6 className="error">{error}</h6>}
    </section>
  )
}

export default NewContactForm;