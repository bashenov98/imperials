import React, {useEffect, useState} from 'react';
import './About.css';
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import FaqItem from "../FAQ/FAQItem";
import Nfts from "../NFTS/NFTS";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";
import Rules from "../Rules/Rules";

const About = () => {

    return (
        <div className="all">
            <div className="hero-section">
                <div className="main-header">
                    <div>
                        <h3>IMPERIALS NFT</h3>
                        <h2>IMPERIALS NFT</h2>
                        <br/>
                        <p className="header-description">2,222 brave and courageous Imperials rebelled and marched against the tyrant Andron. Possessing such qualities as loyalty, justice and courage are inherent in each of them, a warrior will go to the end for truth and honor and will give his life without delay, if necessary.</p>
                    </div>
                    <div className="heroes-cipher">
                        <div className="cipher-text">
                            <h3>
                                2,222 brave and courageous Imperials rebelled and marched against the tyrant Andron. Possessing such qualities as loyalty, justice and courage are inherent in each of them, a warrior will go to the end for truth and honor and will give his life without delay, if necessary.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <Nfts/>
            <div className="planet-section">
                <Roadmap/>
                <Team/>
            </div>
            <FaqItem/>
            <Rules/>
        </div>

    );
};

export default About;

