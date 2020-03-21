import React from 'react';
import gtt from '../icons/gtt.svg';
import '../styles/Header.scss';

const Header = (props) => {
    return (
        <header>
            {/* <img className="header__logo" src={gtt} alt="logo"/> */}
            <div className="btn-green btn-big">Reja</div>
            <div className="btn-red btn-big">Reja</div>
            <div className="btn-white btn-big">Reja</div>
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
            <div className="stop-list-item stop-list-item--active">Jasień PKM</div>
            <input type="text" className="search-input" placeholder="Wpisz numer linii" />
            <form style={{margin: 0}}>
                <input type="text" className="search-input" value="1" />
                <div className="search-item">155</div>
                <div className="search-item">156</div>
            </form>
            <div className="btn-search">Szukaj</div>

            <table className="live-timetable">
                <thead>
                    <tr>
                        <th>Linia</th>
                        <th>Kierunek</th>
                        <th>Odjazd za</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="first-td">155</td>
                        <td className="first-td">Jasień PKM</td>
                        <td className="first-td">4 min</td>
                    </tr>
                    <tr>
                        <td>255</td>
                        <td>Jankowo</td>
                        <td>8 min</td>
                    </tr><tr>
                        <td>295</td>
                        <td>Zakoniczyn</td>
                        <td>14 min</td>
                    </tr><tr>
                        <td>256</td>
                        <td>Jankowo</td>
                        <td>12:20</td>
                    </tr><tr>
                        <td>155</td>
                        <td>Jasień PKM</td>
                        <td>12:24</td>
                    </tr><tr>
                        <td>295</td>
                        <td>Zakoniczyn</td>
                        <td>12:30</td>
                    </tr>
                </tbody>
            </table>

            <table className="calendar">
                <thead>
                    <tr>
                        <th>Pn</th>
                        <th>Wt</th>
                        <th>Śr</th>
                        <th>Cz</th>
                        <th>Pt</th>
                        <th>So</th>
                        <th>Nd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td className="currentDay">21</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>31</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </header>
    );
}

export default Header;