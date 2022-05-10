import React, {useState} from 'react';

import './Roadmap.css';

const Roadmap = () => {
    const [choosenPhase, setChoosenPhase] = useState(0);

    const phases = [
        {id:1, title: 'Phase 1',
            headers: [
                '1.1) Art',
                '1.2) Team',
                '1.3) Website',
                '1.4) Social Networks'
            ],
            description: [
                'Drawing 2,222 pcs of unique drawings by generating more than 100 attributes and backgrounds.',
                'Recruiting a team of enthusiastic people with a lot of experience behind them to create only positive vibes and cool products for our favorite holders.',
                'Creating our website for more information about the project and about us.',
                'Creating our pages on social networks such as Twitter, Discord.'
            ],
            url: 'https://i.ibb.co/4jKSnJH/Group-3-2.png'
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
                'Establish exclusive DAO community.',
                'Presale for the first, hardest working, and most active members of the community.',
                'Public mint for all comers.',
                'Listing on the popular NFT marketplace MagicEden for secondary trade of the collection.'
            ],
            url: 'https://i.ibb.co/YyYNBMz/Group-3-3.png'
        },
        {id:3, title: 'Phase 3',
            headers: [
                '3.1) Tokenomics',
                '3.2) Staking',
                '3.3) Casino',
                '3.4) Auctions'
            ],
            description: [
                'Creating our own token $IMPR to further, integrate them into the game and our ecosystem.',
                'Creating an interesting and unique role-playing game with lots of surprises and chips. You can read full information about the game in the whitepaper.',
                'Launching a staking system for passive income of NFT holders.',
                'Auctions. Conducting auctions among holders of $IMPR Token.'
            ],
            url: 'https://i.ibb.co/SQ3DmHP/Group-3-4.png'
        },
        {id:4, title: 'Phase 4',
            headers: [
                '4) Game 2.0'
            ],
            description: [
                'Launching the next version of game.'
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
                            <h5>Phase 1</h5>
                            <h4>Phase 1</h4>
                        </div>
                    </div>
                    <div className="phase" onClick={() => setChoosenPhase(2)}>
                        <div className='image-box'>
                            <img className="phase-image" src="https://i.ibb.co/YyYNBMz/Group-3-3.png" alt="phase2"/>
                        </div>

                        <div className='phase-info'>
                            <h5>Phase 2</h5>
                            <h4>Phase 2</h4>
                        </div>
                    </div>
                    <div className="phase" onClick={() => setChoosenPhase(3)}>
                        <div className='image-box'>
                            <img  className="phase-image" src="https://i.ibb.co/SQ3DmHP/Group-3-4.png" alt="phase3"/>
                        </div>

                        <div className='phase-info'>
                            <h5>Phase 3</h5>
                            <h4>Phase 3</h4>
                        </div>
                    </div>
                    <div className="phase" onClick={() => setChoosenPhase(4)}>
                        <div className='image-box'>
                            <img className="phase-image" src="https://i.ibb.co/bzLrhvL/Group-3-5.png" alt="phase4"/>
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
            <br/><br/><br/>
        </div>
    );
};

export default Roadmap;