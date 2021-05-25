import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandle = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removeContactList = (id) => {
        const newContactList = contacts.filter((contact) => contact.id !== id);

        setContacts(newContactList);
    };

    useEffect(() => {
        const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (getContacts) setContacts(getContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className='ui container'>
            <Header />
            <AddContact addContactHandle={addContactHandle} />
            <ContactList contacts={contacts} removeContactList={removeContactList}/>
        </div>
    );
};

export default App;
