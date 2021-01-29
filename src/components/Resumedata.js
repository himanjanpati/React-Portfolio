import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default{
    Name:"Himanjan",
    Title:"Software Developer",

    DOB :"14 Nov 1991",
    Place :"Bhubaneswar, India",
    Email :"@Himanjan.pati",
    Skype:"live:himanjan.pati",

    socials: {
        Linkedin:{
            id:1,
            link:"https://www.linkedin.com/in/himanjan-pati-2b2ba0a9/",
            text:"LinkedIn",
            icon:<LinkedInIcon/>
        },
        Github:{
            id:2,
            link:"https://github.com/himanjanpati/",
            text:"GitHub",
            icon:<GitHubIcon/>
        },
        Twitter:{
            id:3,
            link:"",
            text:"Twitter",
            icon:<TwitterIcon/>
        },
       
    },
};