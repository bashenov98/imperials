import React, {useState, useEffect} from 'react';
import './Header.css';
import {ReactComponent as Twitter} from "../../media/Twitter.svg";
import {ReactComponent as Discord} from "../../media/Discord.svg";
import mobileLogo from "../../media/reallogo.PNG";
import discordmob from "../../media/Discord.svg";
import twittermob from "../../media/Twitter.svg";
import bar from "../../media/bar.svg";


import {Link} from "react-router-dom";


const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 1024;

    return (
        <div>
            {!isMobile
            ?
                (
                    <div className="header">
                        <div className="header-logo">
                            <Link to="/"><img src={mobileLogo} style={styles.imgLogo}/></Link>
                        </div>
                        <div className="header-right">
                            <div className="header-buttons">
                                {/*<Link to="/files/Whitepaper.docx" target="_blank" download><p className="tabs">Whitepaper</p></Link>*/}
                                <Link to="/mint"><p className="tabs">Mint</p></Link>
                                <Link to="/game"><p className="tabs">Game</p></Link>
                                <Link to="/staking"><p className="tabs">Staking</p></Link>
                            </div>
                            <div className="socials">
                                <a href="https://twitter.com/ImperialsNFT"><Twitter/></a>
                            </div>
                        </div>
                    </div>
                )
            :
                (
                    <div className="header-mobile">
                        <div className="mobile-top">
                            <div className="mobile-logo">
                                <Link to="/"><img src={mobileLogo} className="mobile-logo-img"/></Link>
                            </div>
                            <div className="mobile-socials">
                                {/*<Link to="https://twitter.com/ImperialsNFT"><img src={twittermob} className="mobsocial-logo"/></Link>*/}
                                {/*<Link to="https://discord.gg/rGXSMKcnv3"><img src={discordmob} className="mobsocial-logo"/></Link>*/}
                            </div>
                        </div>
                        <div className="mobile-tabs">
                            <div className="mob-tab"><Link to="/mint"><p className="mobile-tab">Mint</p></Link></div>
                            <div className="mob-tab"><Link to="/game"><p className="mobile-tab">Game</p></Link></div>
                            <div className="mob-tab"><Link to="/staking"><p className="mobile-tab">Staking</p></Link></div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Header;

const styles = {
    imgLogo: {
        width: '160px'
    }
}
