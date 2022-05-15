import React, {useState} from 'react';

import './Roadmap.css';

const Roadmap = () => {
    const [choosenPhase, setChoosenPhase] = useState(0);

    const phases = [
        {
            id:1,
            title: 'Phase I',
            headers: [
                'Art',
                'Play-to-Earn Game',
                'Tokenomics'
            ],
            description: [
                'Drawing 2,222 pcs of unique drawings by generating more than 100 attributes and backgrounds.',
                'Development of role-playing game based on loot system. You can read full information about the game in the whitepaper.',
                'Creating $IMPR token and an optimal burning system that will be used in game, staking and casino.'
            ],
            url: 'https://i.ibb.co/4jKSnJH/Group-3-2.png'
        },
        {
            id:2,
            title: 'Phase II',
            headers: [
                'Collaborations',
                'DAO',
                'Playable Demo',
                'Presale',
                'Public mint'
            ],
            description: [
                'Collaboration with famous projects and Influencers to distribute WL roles and special roles.',
                'Establish exclusive DAO community.',
                'Release of playable demo of the Game. So that people can make sure that the game is working.',
                'Presale for the first, hardest working, and most active members of the community.',
                'Public mint for all comers.'
            ],
            url: 'https://i.ibb.co/YyYNBMz/Group-3-3.png'
        },
        {
            id:3,
            title: 'Phase III',
            headers: [
                'Imperials Game official release',
                'Staking',
                'Casino',
                'Auctions'
            ],
            description: [
                'All development updates will be shared to members in our discord. Throughout development, upgrading the demo, and issuing patch notes, we will be entirely transparent. “Imperials” is nearing completion, so it will be widely available a few days following the mint.',
                'Launching a staking system for passive income of NFT holders.',
                'Running a casino on the playground.',
                'Conducting auctions among holders of $IMPR token.'
            ],
            url: 'https://i.ibb.co/SQ3DmHP/Group-3-4.png'
        },
        {
            id:4,
            title: 'Phase IV',
            headers: [
                'Game 2.0'
            ],
            description: [
                'Launching a new version of game'
            ],
            url: 'https://i.ibb.co/bzLrhvL/Group-3-5.png'
        }];

    return (
        <div className="roadmap">
            <h3>Roadmap</h3>
            <h2>Roadmap</h2><br/>
            {choosenPhase === 0
                ?
                (<div className="phases">
                    <div className="phase" onClick={() => setChoosenPhase(1)}>
                        <div className='image-box'>
                            <img className="phase-image" src='https://i.ibb.co/4jKSnJH/Group-3-2.png' alt="phase1"/>
                        </div>
                        
                        
                        <div className='phase-info'>
                            <h5>Phase I</h5>
                            <h4>Phase I</h4>
                        </div>
                    </div>
                    <div className="phase" onClick={() => setChoosenPhase(2)}>
                        <div className='image-box'>
                            <img className="phase-image" src="https://i.ibb.co/YyYNBMz/Group-3-3.png" alt="phase2"/>
                        </div>

                        <div className='phase-info'>
                            <h5>Phase II</h5>
                            <h4>Phase II</h4>
                        </div>
                    </div>
                    <div className="phase" onClick={() => setChoosenPhase(3)}>
                        <div className='image-box'>
                            <img  className="phase-image" src="https://i.ibb.co/SQ3DmHP/Group-3-4.png" alt="phase3"/>
                        </div>

                        <div className='phase-info'>
                            <h5>Phase III</h5>
                            <h4>Phase III</h4>
                        </div>
                    </div>
                    <div className="phase" onClick={() => setChoosenPhase(4)}>
                        <div className='image-box'>
                            <img className="phase-image" src="https://i.ibb.co/bzLrhvL/Group-3-5.png" alt="phase4"/>
                        </div>

                        <div className="phase-info">
                            <h5>Phase IV</h5>
                            <h4>Phase IV</h4>
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
                        <div onClick={() => setChoosenPhase(0)} style={{cursor: 'pointer'}}>
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
                                    <h8 className="phase-step-header">{item}</h8>
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
            <br/><br/><br/>
        </div>
    );
};

export default Roadmap;