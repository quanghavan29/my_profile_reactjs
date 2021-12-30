import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CustomButton from '../../components/Button/Button'
import resumeData from '../../utils/resumeData';

import './Contact.css'

const Contact = () => {
    return (
        <>
            {/* Contact */}
            <Grid container className="section" spacing={7}>
                {/* Contact form */}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid>
                        <Grid item xs={12} style={{marginTop: 25}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="name" label="Name"></TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="email" label="Email"></TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name="message" label="Message" multiline rows={4}></TextField>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <CustomButton text="Submit" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Contact Information</h6>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: 25}}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Name: </span> {resumeData.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Phone: </span> {resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Email: </span> {resumeData.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Address: </span> {resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>School: </span> {resumeData.school}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Job: </span> {resumeData.job}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container className="contact_socials">
                                    {Object.keys(resumeData.socials).map((key) => (
                                        <Grid item key={key} className="contact_socials_icon">
                                            <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact
