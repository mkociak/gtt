import React from 'react';
import gtt from '../icons/gtt.svg';
import '../styles/Header.scss';

const Header = (props) => {
    return ( 
        <header>
            {/* <img className="header__logo" src={gtt} alt="logo"/> */}
            <button className="button-big">Łostowice Świętokrzyska</button>
        </header>
     );
}
 
export default Header;