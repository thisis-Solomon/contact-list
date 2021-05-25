import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactList }) => {
    const deleteContact = (id) => {
        removeContactList(id);
    };

    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                key={contact.id}
                deleteContact={deleteContact}
            />
        );
    });
    return (
        <div className='main'>
            <h2>
                Contact list
                <Link to='/add'>
                    <button className='ui button blue '>
                        Add contact
                    </button>
                </Link>
            </h2>
            <div className='ui celled list'>{renderContactList}</div>
        </div>
    );
};

export default ContactList;
