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
import FAQ from "../FAQ2/FAQ.jsx";

const About = () => {

    const [isLoading, setLoading] = useState(false);

    const [faqs, setfaqs] = useState([
        {
            question: 'What Imperials is all about?',
            answer: 'Imperials are unique NFT Collection with P2E Game on Solana blockchain.',
            open: true
        },
        {
            question: 'How much is the supply?',
            answer: '2.222 Imperials. 77 NFTs will be reserved for the founding members, advisors, partners, private investors, collaborations, and promos.',
            open: true
        },
        {
            question: 'How do I get whitelisted?',
            answer: 'Whitelist roles for those, who joined us early are already been given. Don’t be upset, we have allocated special roles for DAOs and for active people in social networks. Feel free to be creative on your own way.',
            open: true
        },
        {
            question: 'What privileges gives me a special role, like WL?',
            answer: 'Whitelisted members are guaranteed to mint 2 imperials each whereas OG and DAO roles are guaranteed to mint 1 each.',
            open: true
        },
        {
            question: 'How much of the supply will be available for the Presale?',
            answer: '1200 of the supply has been reserved for the presale.',
            open: true
        },
        {
            question: 'How much and when is mint day/time?',
            answer: '2 SOL for both presale and Public sale. \n' +
                    'Presale: TBA\n' +
                    'Public Sale: TBA\n',
            open: true
        },
        {
            question: 'How to receive $IMPR Token?',
            answer: 'You will need to login to our staking platform using your wallet, select which Imperials you want to stake, then stake them. The Imperials NFT will not leave your wallet, but listing your NFT on the secondary market or transferring it to another wallet will reset your staking period, and you will need to re-stake your NFT to requalify for $IMPR rewards.\n' +
                    'Also, you can earn it in our P2E game, there is a lot possibility to claim them.\n',
            open: true
        },
        {
            question: 'Where can I buy Imperials after mint?',
            answer: 'We confirmed Magic Eden as the official secondary marketplace for Imperials NFTs.',
            open: true
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

    useEffect(() => {
        if (typeof localStorage == 'undefined') {
            localStorage.setItem('mod', 1);
            setLoading(true);
            setTimeout (() => {
                setLoading(false);
                localStorage.setItem("username", 1);
            }, 600000);
        }
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
                        <div className="faqs">
                            <div className="faq-header">
                                <h3 style={{textAlign: 'center'}}>FAQ</h3>
                                <h2>FAQ</h2><br/>
                            </div>
                            {faqs.map((faq, i) => (
                                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                            ))}
                        </div>
                        <Rules/>
                    </div>
                    <Footer/>
                </div>
            }
        </div>

    );
};

export default About;

