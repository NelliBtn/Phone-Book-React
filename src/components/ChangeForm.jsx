const ChangeForm = ({contact, setContact}) => {

  const handleChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="change-form">
       <div className='label-input-div'>
          <label>Name:</label>
          <input type='text' name='name' value={contact.name} onChange={handleChange}></input>
        </div>
        <div className='label-input-div'>
          <label>Phone:</label>
        <input type='tel' name='phone' value={contact.phone} onChange={handleChange}></input>
        </div>
        <div className='label-input-div'>
          <label>Custom:</label>
          <input type='text' name='custom' value={contact.custom} onChange={handleChange}></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-warning">Change</button>

    </div>
  )
}

export default ChangeForm;