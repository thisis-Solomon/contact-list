import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
    const renderContactList = contacts.map((contact) => {
        return <ContactCard contact={contact} />;
    });
    return <div className='ui celled list'>{renderContactList}</div>;
};

export default ContactList;
