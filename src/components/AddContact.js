import React, { Component } from "react";

export default class AddContact extends Component {
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>

                <form className='ui form'>
                    <h2>Add contact</h2>
                    <div className='filed'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' placeholder='Name' />
                    </div>

                    <div className='filed'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' placeholder='Email' />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}
