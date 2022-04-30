import React from 'react';
import './Team.css';

const Team = () => {

    const team = [
        {id: 1, name: 'Daniyar Bashenov', position: 'Technical Director', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
        {id: 2, name: 'Miras Tursunaliyev', position: 'CEO', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
        {id: 3, name: 'Eldar Guginishvili', position: 'Game Developer', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
        {id: 4, name: 'Daniyar Bashenov', position: 'Technical Director', img: 'https://i.ibb.co/vsLjJdV/Rectangle-648.png'},
    ];

    return (
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
            <br/><br/><br/>
        </div>
    );
};

export default Team;