import { Link } from "react-router-dom";
import defaultIma from "../images/contactIma.jpg";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='item' key={id}>
            <div className='content'>
                <img src={defaultIma} alt={name} className='ui avatar image' />
                <Link
                    to={{
                        pathname: `/contact/${id}`,
                        state: { contact: props.contact },
                    }}
                >
                    <div className='header'>{name}</div>
                    <div>{email} </div>
                </Link>
            </div>
            <i
                style={{ color: "red", marginTop: "1rem" }}
                className='trash alternate outline icon'
                onClick={() => props.deleteContact(id)}
            ></i>
        </div>
    );
};

export default ContactCard;
