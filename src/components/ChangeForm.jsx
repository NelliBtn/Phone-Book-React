const ChangeForm = ({contact, changeContact}) => {


  return (
    <div className="change-form">
      <h4>Edit contact</h4>
       <div className='label-input-div'>
          <label>Name:</label>
          <input type='text' name='name' value={contact.name} onChange={(e) => changeContact(e, contact.id)}></input>
        </div>
        <div className='label-input-div'>
          <label>Phone:</label>
        <input type='tel' name='phone' value={contact.phone} onChange={(e) => changeContact(e, contact.id)}></input>
        </div>
        <div className='label-input-div'>
          <label>Custom:</label>
        <input type='text' name='custom' value={contact.custom} onChange={(e) => changeContact(e, contact.id)}></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-warning">Save</button>

    </div>
  )
}

export default ChangeForm;