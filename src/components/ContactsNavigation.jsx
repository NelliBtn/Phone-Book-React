import './ContactsNavigation.scss'

const ContactsNavigation = ({showForm}) => {

  return (
    <section className="contacts-navigation">
      <form className="search-form">
        <div className="label-input-div">
          <label >Search: </label>
          <input className="search-input" type="text" placeholder="Type here to search"></input>
        </div>
      </form>
      <button type="button" onClick={showForm} className="btn btn-warning">New Contact</button>
    </section>
  )
}

export default ContactsNavigation;