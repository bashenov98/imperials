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
import SwiperCore, {Mousewheel} from "swiper";

// Import Swiper styles
import 'swiper/css';

const Team = () => {
    SwiperCore.use(Mousewheel);
    const team = [
        {id: 1, name: 'Mirko', position: 'CEO', img: Mirka, previmg: Mirkaprev, url:'https://twitter.com/Mirko_Sol'},
        {id: 2, name: 'Daniel', position: 'Developer', img: Danik, previmg: Danikprev, url: 'https://twitter.com/damn_dan09'},
        {id: 3, name: 'SalewaEel', position: 'Game Developer', img: Eldar, previmg: Eldarprev, url: 'https://twitter.com/SalewaEel'},
        {id: 4, name: 'McLovin', position: 'Community Manager', img: Diasprev, previmg: Diasprev, url: 'https://twitter.com/McLovin_sol'},
        {id: 5, name: 'Era', position: 'Community Manager', img: Yeprev, previmg: Yeprev, url: 'https://twitter.com/richestmzfkr1/'},
        {id: 6, name: 'Shug', position: 'Artist', img: Aidaprev, previmg: Aidaprev, url: ''}
    ];

    return (
        <div className="team">
            <h3>Our team</h3>
            <h2>Our team</h2><br/>
            <div className="team-members">
                <Swiper spaceBetween={20} slidesPerView={4} modules={[Mousewheel]} mousewheel={{enabled: true}}>
                    {team.map((item) =>
                        <div key={item.id}>
                            <SwiperSlide >
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