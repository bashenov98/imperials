import React from 'react';
import './Team.css';
import Mirka from '../../media/team/Mirka.jpeg';
import Danik from '../../media/team/Danik.jpeg';
import Eldar from '../../media/team/Eldar.jpeg';
import Mirkaprev from '../../media/team/Mirka-prev.jpeg';
import Danikprev from '../../media/team/Danikprev.jpeg';
import Eldarprev from '../../media/team/Eldarprev.jpeg';
import Diasprev from '../../media/team/Diasprev.jpeg';
import Yeprev from '../../media/team/Yeprev.jpeg';
import Aidaprev from '../../media/team/Aidaprev.jpeg';

import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';

const Team = () => {

    const team = [
        {id: 1, name: 'Miras', position: 'CEO', img: Mirka, previmg: Mirkaprev, url:'https://twitter.com/Mirko_Sol'},
        {id: 2, name: 'Daniyar', position: 'Developer', img: Danik, previmg: Danikprev, url: 'https://twitter.com/eifeleva_bawnya'},
        {id: 3, name: 'Eldar', position: 'Game Developer', img: Eldar, previmg: Eldarprev, url: ''},
        {id: 4, name: 'Dias', position: 'Community Manager', img: Diasprev, previmg: Diasprev, url: ''},
        {id: 5, name: 'Era', position: 'Community Manager', img: Yeprev, previmg: Yeprev, url: ''},
        {id: 6, name: 'Aida', position: 'Artist', img: Aidaprev, previmg: Aidaprev, url: ''}
    ];

    return (
        <div className="team">
            <h3>Our team</h3>
            <h2>Our team</h2><br/>
            <div className="team-members">
                <Swiper spaceBetween={20} slidesPerView={4}>
                    {team.map((item) =>
                        <div key={item.id}>
                            <SwiperSlide>
                                <a href={item.url}>
                                    <img className="photo" src={item.previmg}
                                         onMouseOver={e => (e.currentTarget.src= item.img)}
                                         onMouseOut={e => (e.currentTarget.src= item.previmg)}/>
                                    <h3 className="member-name">{item.name}</h3>
                                    <h3 className="member-position">{item.position}</h3>
                                </a>
                            </SwiperSlide>
                        </div>)}
                </Swiper>
            </div>
            <br/><br/><br/>
        </div>
    );
};

export default Team;