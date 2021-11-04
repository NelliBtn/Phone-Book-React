import './ContactsNavigation.scss'

const ContactsNavigation = ({showForm, form}) => {

  return (
    <section className="contacts-navigation">
      <form className="search-form">
          <label >Search: </label>
          <input className="search-input" type="text" placeholder="Type here to search"></input>
      </form>
      {!form && (
        <button type="button" onClick={showForm} className="btn btn-warning">New Contact</button>
      )}
    </section>
  )
}

export default ContactsNavigation;