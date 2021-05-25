import { Link } from "react-router-dom";
import user from "../images/contactIma.jpg";

const DetailedContact = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt={name} />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
            <div className='center-div'>
                <Link to='/'>
                    <button className='ui button blue center'>
                        back to ontact list
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DetailedContact;
