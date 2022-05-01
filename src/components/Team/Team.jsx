import React from 'react';
import './Team.css';
import Imperial from '../../media/IMG_1469.JPG';
import Mirka from '../../media/team/Mirka.JPG';
import Danik from '../../media/team/Danik.png';
import Eldar from '../../media/team/Eldar.png';

import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';

const Team = () => {

    const team = [
        {id: 1, name: 'Miras', position: 'CEO', img: Mirka, url: 'https://twitter.com/Mirko_Sol'},
        {id: 2, name: 'Daniyar', position: 'Developer', img: Danik, url: 'https://twitter.com/eifeleva_bawnya'},
        {id: 3, name: 'Eldar', position: 'Game Developer', img: Eldar, url: ''},
        {id: 4, name: 'Dias', position: 'Community Manager', img: Imperial, url: ''},
        {id: 5, name: 'Era', position: 'Community Manager', img: Imperial, url: ''},
        {id: 6, name: 'Aida', position: 'Artist', img: Imperial, url: ''}
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
                                    <img className="photo" src={Imperial}
                                         onMouseOver={e => (e.currentTarget.src= item.img)}
                                         onMouseOut={e => (e.currentTarget.src= Imperial)}/>
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