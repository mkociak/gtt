import React from 'react';
import gtt from '../icons/gtt.svg';
import '../styles/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to={'/'}>
                <img src={gtt} alt="gtt-logo" />
            </NavLink>
            <h1>Gdańskie Rozkłady Jazdy</h1>
        </header>
    );
}

export default Header;