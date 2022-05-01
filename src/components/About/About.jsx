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

const About = () => {

    return (
        <div className="all">


            <div className="bg">
                <div className="planet">
                </div>
                <div className="spot1">
                </div>
            </div>
            <div className="fg">
                <Hello/>
                <Nfts/>
                <Roadmap/>
                <Team/>
                <FaqItem/>
                <Rules/>
            </div>
        </div>

    );
};

export default About;

