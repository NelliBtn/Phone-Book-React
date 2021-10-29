import './NewContactForm.scss';

const NewContactForm = () => {
  return (
    <section>
      <form className='new-contact-form'>
        <div className='label-input-div'>
          <label>Name:</label>
          <input type='text' placeholder='Enter name'></input>
        </div>
        <div className='label-input-div'>
          <label>Number:</label>
          <input type='text' placeholder='Enter phone number'></input>
        </div>
        <div className='label-input-div'>
          <label>Custom:</label>
          <input type='text' placeholder='Enter whatever'></input>
        </div>
        <br/>
        <button type="button" class="btn btn-warning">Create</button>
      </form>
    </section>
  )
}

export default NewContactForm;