import React from 'react';
import avatars from '../images/avatars/sadh.png'
import akash from "../images/avatars/akash.png"
import almas from "../images/avatars/almas.png"
import ferdous from "../images/avatars/ferdous.png"
import riyadh from "../images/avatars/riyadh.png"
import sadh from "../images/avatars/sadh.png"
import salahuddin from "../images/avatars/salahuddin.png"
import sumit from "../images/avatars/sumit.png"


const TeamMember = ({ team }) => {
    const { avatar, id, name } = team || {}
    // const { logo } = require(`..${avatar}`)
    return (
        <div className="checkbox-container">
            {/* <img src={`..${avatar}`} className="team-avater" alt='' /> */}
            {/* <img src={avatars} className="team-avater" alt='' /> */}
            {/* <img src={require(`..${avatar}`)} className="team-avater" alt='' /> */}
            {avatar.includes('akash') && <img src={akash} className="team-avater" alt='' />}
            {avatar.includes('almas') && <img src={almas} className="team-avater" alt='' />}
            {avatar.includes('ferdous') && <img src={ferdous} className="team-avater" alt='' />}
            {avatar.includes('riyadh') && <img src={riyadh} className="team-avater" alt='' />}
            {avatar.includes('sadh') && <img src={sadh} className="team-avater" alt='' />}
            {avatar.includes('salahuddin') && <img src={salahuddin} className="team-avater" alt='' />}
            {avatar.includes('sumit') && <img src={sumit} className="team-avater" alt='' />}
            <p className="label">{name}</p>
        </div>
    );
};

export default TeamMember;