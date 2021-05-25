import defaultIma from "../images/contactIma.jpg";

const ContactCard = ({ contact }) => {
    return (
        <div className='item' key={contact.id}>
            <div className='content'>
                <img
                    src={defaultIma}
                    alt={contact.name}
                    className='ui avatar image'
                />
                <div className='header'>{contact.name}</div>
                <div>{contact.email} </div>
            </div>
            <i
                style={{ color: "red", marginTop: "1rem" }}
                className='trash alternate outline icon'
            ></i>
        </div>
    );
};

export default ContactCard;
