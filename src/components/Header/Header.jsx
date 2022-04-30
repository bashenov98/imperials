import React from 'react';
import './Header.css';
import {ReactComponent as Twitter} from "../../media/Twitter.svg";
import {ReactComponent as Logo} from "../../media/Logo.svg";
import {ReactComponent as Discord} from "../../media/Discord.svg";


const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Logo style={styles.imgLogo}/>
            </div>
            <div className="header-buttons">
                <a href="/"><p className="tabs">About</p></a>
                <a href="/mint"><p className="tabs">Mint</p></a>
                <a href="/game"><p className="tabs">Game</p></a>
                <a href="/staking"><p className="tabs">Staking</p></a>
            </div>
            <div className="socials">
                <a href="https://twitter.com/ImperialsNFT"><Twitter/></a>
                <a href="https://discord.gg/rGXSMKcnv3"><Discord/></a>
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
