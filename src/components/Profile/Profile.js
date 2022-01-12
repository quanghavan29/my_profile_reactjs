import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import './Profile.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';


import resumeData from '../../utils/resumeData'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';

const CustomTimelineItem = ({ title, text, link }) => {
    return (
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className="timeline_content">
                {link ? (<Typography className="timelineItem_text"><span>{title}:</span>
                    <a href={link}>{text}</a>
                </Typography>) : (
                    <Typography className="timelineItem_text"><span>{title}:</span> {text}</Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={resumeData.avatarUrl} alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Gender' text={resumeData.gender} />
                    <CustomTimelineItem title='Birthday' text={resumeData.birthday} />
                    <CustomTimelineItem title='Phone' text={resumeData.phone} />
                    {/* <CustomTimelineItem title='Email' text={resumeData.email} /> */}
                    <CustomTimelineItem title='School' text={resumeData.school} />
                    <TimelineItem>
                        <TimelineSeparator className="separator_padding">
                            <TimelineDot variant="outlined" className="timeline_dot" />
                        </TimelineSeparator>
                        <TimelineContent className="timeline_content">
                            <Typography className="timelineItem_text"><span>Job:</span> Web Developer</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </CustomTimeline>
                {/* <br /> */}
                <div className="btn_container">
                    <a href={resumeData.myCV} target="_blank" style={{textDecoration: 'none'}}>
                        <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile
