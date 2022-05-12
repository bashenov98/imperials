import React from 'react';

import './Navbar.css';
import logo from "../../media/reallogo.PNG";
import bar from "../../media/bar.svg";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">
            <Link to="/">
                <img src={logo} className="brand-name"/>
            </Link>
            <button className="hamburger">
                <img src={bar} alt="hamburger"/>
            </button>
            <div className="navigation-menu">
                <ul>
                    <li>
                        <Link to="/mint"><p className="mobile-tab">Mint</p></Link>
                    </li>
                    <li>
                        <Link to="/game"><p className="mobile-tab">Game</p></Link>
                    </li>
                    <li>
                        <Link to="/staking"><p className="mobile-tab">Staking</p></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;