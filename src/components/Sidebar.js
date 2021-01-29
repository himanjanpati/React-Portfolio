import React from 'react'
import profilepic from '../assets/myprofile.jpg'
import TimeLineProfile from './TimeLineProfile';
import'./Timeline.css';
import'./Timelineprofile.css';
import '../index.css';


const Sidebar = () => {
    
    return (
        <div className="profile sidebar">
            <div className="sidebar__name">Himanjan Pati</div>
            <div className="sidebar__item sidebar__title">M365 Consultant / Azure Developer</div>
            <div className={'sidebar__avatar'}>
            <img src={profilepic} alt="avatar"/>
            </div>
            <TimeLineProfile />
            
        </div>
    )
}

export default Sidebar;