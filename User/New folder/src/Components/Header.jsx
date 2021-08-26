import React from 'react';
import '../Styles/Header.css';

export default function Header(props){
    return(
        <header>
            <div className="container">
                <nav>
                    <div className="brand">
                        <h1>Contacts</h1>
                    </div>
                </nav>
            </div>
        </header>
    )
}