import { Link } from "react-router-dom";
import defaultIma from "../images/contactIma.jpg";

const ContactCard = ({ contact: { id, name, email }, deleteContact }) => {
    return (
        <div className='item' key={id}>
            <div className='content'>
                <img src={defaultIma} alt={name} className='ui avatar image' />
                <Link to={`/contact/${id}`}>
                    <div className='header'>{name}</div>
                    <div>{email} </div>
                </Link>
            </div>
            <i
                style={{ color: "red", marginTop: "1rem" }}
                className='trash alternate outline icon'
                onClick={() => deleteContact(id)}
            ></i>
        </div>
    );
};

export default ContactCard;
