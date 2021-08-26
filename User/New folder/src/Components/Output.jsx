import React from 'react';
import '../Styles/Output.css';

export default function Output({contacts}){
    return(
        <div className="field">
            <div className="container">
                <div className="field-box">
                    {contacts.map((contact) =>(
                        <h1>{contact.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}