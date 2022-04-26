import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src='https://i.ibb.co/VDxkQyz/Logo-1.png' style={styles.imgLogo} alt="logo"/>
            </div>
            <div className="header-buttons">
                <a href="/about">ABOUT</a>
                <a href="/mint">MINT</a>
                <a href="/game">GAME</a>
                <a href="/staking">STAKING</a>
            </div>
        </div>
    );
};

export default Header;

const styles = {
    imgLogo: {
        width: '120px'
    }
}
