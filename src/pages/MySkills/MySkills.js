import React from 'react'
import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';

import './MySkills.css'
import TimelineDot from '@material-ui/lab/TimelineDot';

const MySkills = () => {
    return (
        <>
            {/* Service */}
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">My Skills</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} >
                    {resumeData.services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={12} key={index}>
                            <div className="service">
                                <Icon className="service_icon">{service.icon}</Icon>
                                <Typography className="service_title" variant="h6">
                                    {service.title}
                                </Typography>
                                <Typography className="service_description" variant="body2">
                                    {service.description}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid item xs={12} style={{marginTop: 50}}>
                <Grid container spacing={3}
                    justifyContent="space-between"
                    className="graybg pd_30">
                    {resumeData.skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper elevation={0} className="skill">
                                <Typography variant="h6" className="skill_title">
                                    {skill.title}
                                </Typography>
                                {skill.description.map((element, index) => (
                                    <Typography variant="body2" className="skill_description" key={index}>
                                        <TimelineDot variant="outlined" className="skill_timeline_dot"/>
                                        {element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default MySkills
