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

import {ReactComponent as Planet} from "../../media/backgrounds/planet.svg";
import {ReactComponent as Spot1} from "../../media/backgrounds/bg1.svg";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if(typeof(localStorage.getItem("username"))=='undefined') {
            setLoading(true);
            setTimeout (() => {
                setLoading(false);
                localStorage.setItem("username", 1);
            }, 600000);
        };
    }, []);

    const handleLanguage = (langValue) => {
        setLoading(false);
    }


    return (
        <div>
            {isLoading
                ?
                <Intro onIntro={handleLanguage}/>
                :
                <div className="all">
                    <Header/>
                    <div className="bg">
                        <div className="planet"/>
                        <div className="spot1"/>
                        <div className="spot3"/>
                    </div>
                    <div className="fg">
                        <Hello/>
                        <Nfts/>
                        <Roadmap/>
                        <Team/>
                        <FaqItem/>
                        <Rules/>
                    </div>
                    <Footer/>
                </div>
            }
        </div>

    );
};

export default About;

