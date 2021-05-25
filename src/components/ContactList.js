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
    return <div className='ui celled list'>{renderContactList}</div>;
};

export default ContactList;
