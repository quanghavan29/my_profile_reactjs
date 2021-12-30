import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './Resume.css'
import MySkills from '../MySkills/MySkills';

const Resume = () => {
    return (
        <>
            {/* Education and experiences */}
            <Grid container className="section">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>

                <Grid item xs={12} className="resume_timeline">
                    <Grid container>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title={'Work Experience'} icon={<WorkIcon />}>
                                {resumeData.experiences.map((experience, index) => (
                                    <TimelineItem key={index}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent style={{ paddingTop: 0 }}>
                                            <Typography className="resume_timeline_title"
                                                style={{ fontSize: 16, fontWeight: 'bold', marginTop: 0 }}
                                            >{experience.title}</Typography>
                                            <Typography style={{ fontSize: 14, color: '#787878', fontWeight: 'bold', paddingTop: 4 }}>{experience.date}</Typography>
                                            <Typography style={{ color: 'gray', fontSize: 'small', marginTop: 10 }} cariant="body2">{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title={'Education'} icon={<SchoolIcon />}>
                                {resumeData.educations.map((experience, index) => (
                                    <TimelineItem key={index}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent style={{ paddingTop: 0 }}>
                                            <Typography className="resume_timeline_title"
                                                style={{ fontSize: 16, fontWeight: 'bold' }}
                                            >{experience.title}</Typography>
                                            <Typography style={{ fontSize: 14, color: '#787878', fontWeight: 'bold', paddingTop: 4 }}>{experience.date}</Typography>
                                            <Typography style={{ color: 'gray', fontSize: 'small', marginTop: 10 }} cariant="body2">{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* My Skills */}
            <Grid container className="section" style={{marginTop: 30}}>
                <MySkills />
            </Grid>
        </>
    )
}

export default Resume
