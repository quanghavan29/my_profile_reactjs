import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import React, { useState } from 'react'
import resumeData from '../../utils/resumeData';
import YouTube from 'react-youtube';

import './Project.css'

const Project = () => {

    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <>
            {/* My Project */}
            <Grid container className="section">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">My Projects</h6>
                </Grid>

                <Grid item xs={12}>
                    <Tabs value={tabValue} className="custom_tabs" onChange={(e, newValue) => setTabValue(newValue)}>
                        <Tab label="All" value="All" className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />
                        {[...new Set(resumeData.projects.map((item) => item.tag))].map((tag, index) => (
                            <Tab key={index} value={tag} label={tag} className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'} />
                        ))}
                    </Tabs>
                </Grid>

                <Grid item xs={12} style={{paddingTop: 40}}>
                    <Grid container spacing={3}>
                        {resumeData.projects.map((project, index) => (
                            <>
                                {tabValue === project.tag || tabValue === 'All' ? (<Grid item xs={12} sm={6} md={3} lg={4}>
                                    <Grow in timeout={1000}>
                                        <Card className="custom_card" onClick={() => { setProjectDialog(project) }}>
                                            <CardActionArea>
                                                <CardMedia className="custom_card_image" image={project.imageUrl} title={project.title}>
                                                </CardMedia>
                                                <CardContent>
                                                    <Typography className="custom_card_title">{project.title}</Typography>
                                                    <Typography className="custom_card_caption" variant="body2">{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>) : null}
                            </>
                        ))}
                    </Grid>
                </Grid>

                <Dialog open={projectDialog} onClose={() => { setProjectDialog(false) }} className="project_dialog" fullWidth>
                    <DialogTitle onClose={() => { setProjectDialog(false) }} className="project_dialog_title">{projectDialog.title}</DialogTitle>
                    {/* <img src={projectDialog.imageUrl} alt="image_project.jpg" className="project_dialog_image" /> */}
                    <YouTube videoId={projectDialog.videoId} className="project_dialog_youtobe"/>
                    <DialogContent>
                        <Typography className="project_dialog_description">{projectDialog.description}</Typography>
                    </DialogContent>
                    <DialogActions className="project_dialog_actions">
                        {projectDialog?.links?.map((item, index) => (
                            <a href={item.link} key={index} className="project_dialog_icon" target="_blank">{item.icon}</a>
                        ))}
                    </DialogActions>
                </Dialog>

            </Grid>
        </>
    )
}

export default Project
