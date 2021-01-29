import { Typography } from "@material-ui/core";
import React from "react";
import "../index.css";
import resume from "../assets/Resume.pdf";
import skypeicon from "../assets/icons/Skype.png";
import outlookicon from "../assets/icons/microsoft-outlook.png";
import CustomTimeLine, { CustomTimelineSeparator } from "./CustomTimeLine";
import Resumedata from "./Resumedata";
import ContactsIcon from "@material-ui/icons/Contacts";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CustomButton from "./CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./Timeline.css";
import "./Timelineprofile.css";

const CustomTimeLineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography>
            <span>{title}</span>
            <a herf={link} target="_blank" />
          </Typography>
        ) : (
          <Typography>
            <span>{title}</span>
            <span className="location_data">{text}</span>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const handleEmailMe = () => {
  window.open("mailto:himanjan.pati@outlook.com");
};


const TimeLineProfile = () => {
  return (
    <div className="profile_info">
      <div>
        <CustomTimeLine icon={<ContactsIcon />}>
          <CustomTimeLineItem
            title={<LocationOnIcon className="timeline_info location_data" />}
            text={<span className="timeline_info">{Resumedata.Place}</span>}
          />
          <CustomTimeLineItem
            title={
              <a href="">
                <img
                  src={outlookicon}
                  className="outlook_icon timeline_info"
                  onClick={handleEmailMe}
                />
              </a>
            }
            text={<span className="timeline_info">{Resumedata.Email}</span>}
          />
          <CustomTimeLineItem
            title={
              <a href="">
                <img src={skypeicon} className="skype_icon timeline_info" />
              </a>
            }
            text={<span className="timeline_info">{Resumedata.Skype}</span>}
          />
          <CustomTimeLineItem
            title={
              <a href={Resumedata.socials.Github.link} target="_blank">
                {<GitHubIcon className="Github_icon timeline_info" />}
              </a>
            }
            text={
              <span className="timeline_info">
                {Resumedata.socials.Github.text}
              </span>
            }
          />
        </CustomTimeLine>
      </div>
      <br />
      <div className="button_container">
        <a href={resume} target="_blank" rel="noopener noreferrer" download>
          {
            <CustomButton
              text={"Download CV"}
              icon={<GetAppIcon />}
            />
          }
        </a>
      </div>
    </div>
  );
};

export default TimeLineProfile;

export { CustomTimeLineItem };
