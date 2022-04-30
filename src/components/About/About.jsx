import React, {useEffect, useState} from 'react';
import './About.css';
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import FaqItem from "../FAQ/FAQItem";


const About = () => {
    const [choosenPhase, setChoosenPhase] = useState(0);
    const items = [
        {id: 1, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 2, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 3, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 4, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 5, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 6, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 7, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'},
        {id: 8, url: 'https://i.ibb.co/ZVCwHZs/IMG-1545.jpg'}
    ];

    const phases = [
        {id:1, title: 'Phase 1',
            headers: [
                '1.1) Art',
                '1.2) Team',
                '1.3) Website',
                '1.4) Social Networks'
            ],
            description: [
                'Drawing 2000 pcs of unique drawings by generating more than 100 attributes and backgrounds.',
                'Recruiting a team of cool and fun people with a lot of experience behind them to create only positive vibes and cool products for our favorite holders.',
                'Creating our website for more information about the project and about us.',
                'Creating our pages on social networks such as Twitter, Discord.'
            ]
        },
        {id:2, title: 'Phase 2',
            headers: [
                '2.1) Marketing',
                '2.2) Collaborations',
                '2.3) DAO',
                '2.4) Presale',
                '2.5) Public Mint',
                '2.6) Listing'
            ],
            description: [
                'Promotion of social networks and PR of the project for wide publicity in the society. We want everyone to know about us on blockchain Solana.',
                'Collaboration with famous projects and Influencers to distribute WL roles and special roles.',
                'Creating a close-knit and friendly community.',
                'Presale for the first, hardest working, and most active members of the community.',
                'Public mint for all comers.',
                'Listing on the popular trading platform MagicEden for secondary trade of the collection.'
            ]
        },
        {id:3, title: 'Phase 3',
            headers: [
                '3.1) Tokenomics',
                '3.2) Staking',
                '3.3) Casino'
            ],
            description: [
                'Creating your own token $??? To further, integrate them into the game and our ecosystem.',
                'Creating an interesting and unique role-playing game with lots of surprises and chips. You can read full information about the game in the whitepaper.',
                'Launching a staking system for passive income of NFT holders.'
            ]
        },
        {id:4, title: 'Phase 4',
            headers: [
                '4) New Collections'
            ],
            description: [
                'Launching the next collection for all holders.'
            ]
        }];

    const team = [
        {id: 1, name: 'Daniyar Bashenov', position: 'Technical Director', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
        {id: 2, name: 'Miras Tursunaliyev', position: 'CEO', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
        {id: 3, name: 'Eldar Guginishvili', position: 'Game Developer', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
        {id: 4, name: 'Daniyar Bashenov', position: 'Technical Director', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
    ];

    useEffect(() => {
        console.log(choosenPhase);
        }, [choosenPhase])



    return (
        <div className="all">
            <div className="hero-section">
                <div className="main-header">
                    <div>
                        <h3>IMPERIALS NFT</h3>
                        <h2>IMPERIALS NFT</h2>
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
            </div><br/><br/><br/>
            <div>
                <h3>Our NFTs</h3>
                <h2>Our NFTs</h2>
                <Swiper spaceBetween={50}
                        slidesPerView={3}>
                    {items.map((item, id) =><div className="swiper-item" key={item.id}>
                                        <SwiperSlide>
                                            <img src={item.url} alt="IMG-1545" />
                                        </SwiperSlide>
                                      </div>)}
                </Swiper>
            </div><br/><br/><br/>
            <div className="planet-section">
                <div>
                    <h3>Roudmap</h3>
                    <h2>Roudmap</h2>
                    {choosenPhase === 0
                        ?
                        (<div className="phases">
                            <div className="phase" onClick={() => setChoosenPhase(1)}>
                                <div className="phase-image">
                                    <img src='https://i.ibb.co/4jKSnJH/Group-3-2.png' alt="phase1"/>
                                </div>
                                <div>
                                    <h5>Phase 1</h5>
                                    <h4>Phase 1</h4>
                                </div>
                            </div>
                            <div className="phase" onClick={() => setChoosenPhase(2)}>
                                <div className="phase-image">
                                    <img src="https://i.ibb.co/YyYNBMz/Group-3-3.png" alt="phase2"/>
                                </div>
                                <div>
                                    <h5>Phase 2</h5>
                                    <h4>Phase 2</h4>
                                </div>
                            </div>
                            <div className="phase" onClick={() => setChoosenPhase(3)}>
                                <div className="phase-image">
                                    <img src="https://i.ibb.co/SQ3DmHP/Group-3-4.png" alt="phase3"/>
                                </div>
                                <div>
                                    <h5>Phase 3</h5>
                                    <h4>Phase 3</h4>
                                </div>
                            </div>
                            <div className="phase" onClick={() => setChoosenPhase(4)}>
                                <div className="phase-image">
                                    <img src="https://i.ibb.co/bzLrhvL/Group-3-5.png" alt="phase4"/>
                                </div>
                                <div className="phase-info">
                                    <h5>Phase 4</h5>
                                    <h4>Phase 4</h4>
                                </div>
                            </div>
                        </div>)
                        :
                        (<div className="choosen-phase">
                            <div className="phase-top">
                                <div className="phase-title">
                                    <h5>{phases[choosenPhase - 1].title}</h5>
                                    <h4>{phases[choosenPhase - 1].title}</h4>
                                </div>
                                <div onClick={() => setChoosenPhase(0)}>
                                    <img src="https://i.ibb.co/19rphvB/Group-164.png" alt="close-phase"/>
                                </div>
                            </div>
                            <div className="phase-bottom">
                                <div className="phase-description">
                                    {/*{phases[choosenPhase - 1].description.map((item) =><div className="swiper-item">*/}
                                    {/*    {item}*/}
                                    {/*</div>)}*/}
                                    {phases[choosenPhase - 1].headers.map((item, index) =>
                                        <div className="swiper-item">
                                            <p className="phase-step-header">{item}</p>
                                            <p className="phase-step-text">{phases[choosenPhase - 1].description[index]}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="phase-right_btm_img">
                                    <img src={phases[choosenPhase - 1].url} alt="phase-image"/>
                                </div>
                            </div>
                        </div>)
                    }
                </div><br/><br/><br/>
                <div className="team">
                    <h3>Our team</h3>
                    <h2>Our team</h2><br/>
                    <div className="team-members">
                        {team.map((item) =>
                            <div key={item.id}>
                                <img src={item.img}
                                     onMouseOver={e => (e.currentTarget.src='https://i.ibb.co/GnBB48V/Rectangle-648-1.png')}
                                     onMouseOut={e => (e.currentTarget.src= item.img)}/>
                                <h3 className="member-name">{item.name}</h3>
                                <h3 className="member-position">{item.position}</h3>
                            </div>)}
                    </div>
                </div>
            </div><br/><br/><br/>
            <div>
                <div className="faq-header">
                    <h3 style={{textAlign: 'center'}}>FAQ</h3>
                    <h2>FAQ</h2>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <FaqItem>2</FaqItem>
                </div>
            </div><br/><br/><br/>
        </div>
    );
};

export default About;

