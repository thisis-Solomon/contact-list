import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
    const contacts = [
        {
            id: "1",
            name: "Solomon Njobvu",
            email: "solomonnjobvu1@gmail.com"
        },
        {
            id: "",
            name: "Njobvu Solomon",
            email: "solomonnjobvu3@gmail.com"
        }
    ]
    
    return (
        <div className="ui container">
            <Header />
            <AddContact />
            <ContactList contacts={contacts}/>
        </div>
    );
};

export default App;
