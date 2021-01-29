import React from 'react';
import Docker from '../assets/icons/icons8-docker.svg';
import SharePoint from '../assets/icons/icons8-microsoft-sharepoint-2019.svg';
import Teams from '../assets/icons/icons8-microsoft-teams-2019.svg';
import Azure from '../assets/icons/icons8-azure.svg';

import Skillcard from './Skillcard';

const skills = [
    {
        icon: SharePoint,
        title: "SharePoint Development",
        about: "Proficient in building intranet portals using SharePoint and O365 workloads"
    },
    {
        icon: Teams,
        title: "Teams  Development",
        about: "Expert in buildings highly scalable Apps, Bots, extensions for Microsoft Teams",
    },
    {
        icon: Azure,
        title: "Azure Cloud Application Developer",
        about: "Proficent in developing and hosting highly scalable cloud applications"
    },
    {
        icon: "https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-icons/Azure-DevOps.svg",
        title: "Azure DevOps",
        about: "Knowledge on deploying applications using CI/CD pipelines and devops tools integration"
    },
    {
        icon: "https://raw.githubusercontent.com/himanjanpati/himanjanpati/master/iconfinder_React.js_logo_1174949.png",
        title: "ReactJS",
        about: "Knowledge on web development and developing SPA using ReactJS"
    },
    {
        icon: Docker,
        title: "containerization",
        about: "Hands-on experinece in dockerizing various applications and  Azure Kubernetes Service"
    },
]


const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
            I am a result oriented and passionate problem solver who loves to lean and grow with innovation.
            I always believe that technology has to be mastered by innovation rather than hands-on experience.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Skills</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;