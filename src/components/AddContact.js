import React, { Component } from "react";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
    };

    addContactHandler = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandle(this.state);
        this.setState({ name: "", email: "" });
        this.props.history.push("/");
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>

                <form className='ui form' onSubmit={this.addContactHandler}>
                    <div className='filed'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleOnChange}
                        />
                    </div>

                    <div className='filed'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}
