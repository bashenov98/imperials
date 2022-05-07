import React from 'react';
import './Footer.css';
import {ReactComponent as Twitter} from "../../media/Twitter.svg";
import {ReactComponent as Discord} from "../../media/Discord.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="line">

            </div>
            <div className="footer-content">
                <p className="footer-text">ⓒ Imperials NFT, 2022</p>
                <div className="header-socials">
                    <a href="https://twitter.com/ImperialsNFT"><Twitter/></a>
                    <a href="https://discord.gg/rGXSMKcnv3"><Discord/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;