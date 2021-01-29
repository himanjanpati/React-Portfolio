import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import '../index.css';
import'./Timeline.css';
import'./Timelineprofile.css';



const CustomTimeLine = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Header Item */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_main_dot"} >{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
           {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
        {children}
      {/* Remaining Item */}
    </Timeline>
  );
};

const CustomTimelineSeparator = () => {
    return (
        <TimelineSeparator className={'timeline_separator_padding'}>
          <TimelineDot variant={'outlined'} className={"timeline_sub_dot"} />
          <TimelineConnector />
        </TimelineSeparator>
    );
}

export  {CustomTimelineSeparator};


export default CustomTimeLine;
