import React from 'react';
import react from '../assets/icons/react.svg'
import Bar from './Bar';
import TimelineItem from "@material-ui/lab/TimelineItem";
import { Typography } from "@material-ui/core";
import TimelineContent from "@material-ui/lab/TimelineContent";
import WorkIcon from '@material-ui/icons/Work';
import CustomTimeLine, { CustomTimelineSeparator } from './CustomTimeLine';
import SchoolIcon from '@material-ui/icons/School';
import '../index.css';
import './Timeline.css';
import ResumeData, { EducationData } from './data/ResumeData';

const languages = [
    {
        icon: react,
        name: 'C#',
        level: '70'
    },
    {
        icon: react,
        name: '.Net Core',
        level: '60'
    },
    {
        icon: react,
        name: 'NodeJS',
        level: '70'
    },
    {
        icon: react,
        name: 'ReactJS',
        level: '60'
    },
    {
        icon: react,
        name: 'REST API',
        level: '80'
    },
    {
        icon: react,
        name: 'Material UI',
        level: '70'
    }
]

const tools = [
    {
        icon: react,
        name: 'VS Code',
        level: '85'
    },
    {
        icon: react,
        name: 'PowerApps',
        level: '60'
    },
    {
        icon: react,
        name: 'PowerAutomate',
        level: '70'
    },
    {
        icon: react,
        name: 'SharePoint',
        level: '80'
    },
    {
        icon: react,
        name: 'Azure',
        level: '75'
    },
    {
        icon: react,
        name: 'DevOps',
        level: '60'
    },

]

const ResumeTimeLineItem = ({title, workyr,text}) =>
{
    return(
        <TimelineItem>
        <CustomTimelineSeparator/>
            <TimelineContent className="timeline_content">
              <Typography><div className="resume_work">{title}</div></Typography>
              <Typography> <div className="resume_workyr">{workyr}</div></Typography>
              <Typography> <div>{text}</div></Typography>
            </TimelineContent>
        </TimelineItem> 
    );
    
}


const Resume = () =>
{
    return(
        <>
        <div className="container resume">
        <div className="row">
        <div className="col-lg-6 resume-card" >
        <CustomTimeLine icon={<WorkIcon/>} title="Work History">
        {ResumeData.map((val) => {
            return(
                    <ResumeTimeLineItem key= {val.id} title={val.Work} className="timeline_info location_data"  workyr={val.Workyr} text={(<div className="timeline_info">{val.Workdesc}</div>)}/> 
            );
        })}
        </CustomTimeLine>
        </div>

        <div className="col-lg-6 resume-card" >
        <CustomTimeLine icon={<SchoolIcon/>} title="Education">
        {EducationData.map((val) => {
            return(
                    <ResumeTimeLineItem key= {val.id} title={val.Work} className="timeline_info location_data"  workyr={val.Workyr} text={(<div className="timeline_info">{val.Workdesc}</div>)}/> 
            );
        })}
        </CustomTimeLine>
        </div>
        </div>
        <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume;