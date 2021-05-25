import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import DetailedContact from "./components/DetailedContact";
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
            <Router>
                {/* <Header /> */}
                <Switch>
                    <Route
                        path='/'
                        exact
                        render={(props) => (
                            <ContactList
                                {...props}
                                contacts={contacts}
                                removeContactList={removeContactList}
                            />
                        )}
                    />
                    <Route
                        path='/add'
                        render={(props) => (
                            <AddContact
                                {...props}
                                addContactHandle={addContactHandle}
                            />
                        )}
                    />
                    <Route path="/contact/:id" component={DetailedContact}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
