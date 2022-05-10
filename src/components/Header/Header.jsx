import React from 'react';
import './Header.css';
import {ReactComponent as Twitter} from "../../media/Twitter.svg";
import {ReactComponent as Logo} from "../../media/Logo.svg";
import {ReactComponent as Discord} from "../../media/Discord.svg";


import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Logo style={styles.imgLogo}/>
            </div>
            <div className="header-right">
                <div className="header-buttons">
                    <Link to="/"><p className="tabs">About</p></Link>
                    <Link to="/mint"><p className="tabs">Mint</p></Link>
                    <Link to="/game"><p className="tabs">Game</p></Link>
                    <Link to="/staking"><p className="tabs">Staking</p></Link>
                </div>
                <div className="socials">
                    <Link to="https://twitter.com/ImperialsNFT"><Twitter/></Link>
                    <Link to="https://discord.gg/rGXSMKcnv3"><Discord/></Link>
                </div>
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
