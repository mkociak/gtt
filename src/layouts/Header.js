import React from 'react';
import gtt from '../icons/gtt.svg';
import '../styles/Header.scss';

const Header = (props) => {
    return (
        <header>
            {/* <img className="header__logo" src={gtt} alt="logo"/> */}
            <div className="btn-green btn-big">Reja</div>
            <div className="btn-red btn-big">Reja</div>
            <div className="btn-transparent btn-big">Reja</div>
            <div className="btn-red btn-medium btn-calendar">pon, 9.03.2020</div>
            <div className="btn-red btn-medium btn-calendar btn-calendar--active">pon, 9.03.2020</div>
            <div className="btn-line">N4</div>
            <div className="btn-line--active">N4</div>
            <div className="time-label-hour">15</div>
            <div className="time-label">25</div>
            <div className="time-label--active">25</div>
            <div className="btn-coming-departure">4 min</div>
            <div className="btn-coming-departure btn-coming-departure--active">4 min</div>

            <div className="info-plate">
                Wybierz numer linii, opcjonalnie przystanek LUB wybierz sam przystanek.
            </div>
            <div className="stop-list-item">Jasień PKM</div>
            <div className="stop-list-item--active">Jasień PKM</div>
            <input type="text" className="search-input" placeholder="Wpisz numer linii" />
            <form style={{margin: 0}}>
                <input type="text" className="search-input" value="1" />
                <div className="search-item">155</div>
                <div className="search-item">156</div>
            </form>
            <div className="btn-search">Szukaj</div>

        </header>
    );
}

export default Header;