import React from 'react';
import './Header.scss';

import { NavLink, BrowserRouter } from 'react-router-dom';

export const Header = () => {

    return (
        <div className="header">
            <h1>Jonathan Eibisch</h1>
            <p className='subtitle'>Politische Theorie | Dozent 
            </p>
            <nav>
            <BrowserRouter>
                <div className="links">
                    <div className="single-link">
                        <NavLink to="/publications">Publikationen</NavLink>
                    </div>
                    <div className="single-link">
                        <NavLink to="/teaching">Lehre</NavLink>
                    </div>
                    <div className='single-link'>
                        <NavLink to="/Bio">Biografie</NavLink>
                    </div>
                    <div className="single-link">
                        <NavLink to="/contact">Kontakt</NavLink>
                    </div>
                </div>
            </BrowserRouter>
            </nav>
        </div>
    )
} 