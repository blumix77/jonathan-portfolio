import React from 'react';
import './Header.scss';

import { NavLink, BrowserRouter } from 'react-router-dom';

export const Header = () => {

    return (
        <div className="header">
            <h1>Jonathan Eibisch</h1>
            <p>Politische Theorie | Dozent </p>
           <BrowserRouter>
            <nav>
                <div className="Links">
                <NavLink to="/publications">Publikationen</NavLink>
                <NavLink to="/teaching">Lehre</NavLink>
                <NavLink to="/Bio">Biografie</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
                </div>
            </nav>
            </BrowserRouter>
        </div>
    )
} 