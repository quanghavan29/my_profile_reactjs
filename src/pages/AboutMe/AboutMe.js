import { Grid, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import YouTube from 'react-youtube';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CustomButton from '../../components/Button/Button';

const AboutMe = () => {

    const [favoriteDialog, setFavoriteDialog] = useState(false);
    const [visibleFavorite, setVisibleFavorite] = useState('none');

    return (
        <>
            {/* About me */}
            <Grid container className="section">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography className="aboutme-text">{resumeData.aboutMe.content1}</Typography>
                    <br />
                    <Typography className="aboutme-text">{resumeData.aboutMe.content2}</Typography>
                </Grid>

                <Grid item className="section_title mb_30" style={{ marginTop: 45 }}>
                    <span></span>
                    <h6 className="section_title_text">My Favorites</h6>
                </Grid>

                <div className="btn_container">

                </div>

                <Grid item xs={12}>
                    {visibleFavorite === 'none' ?
                        <CustomButton text={'SHOW'} icon={<VisibilityIcon />}
                            onClick={() => { setVisibleFavorite('block') }} /> :
                        <CustomButton text={'HIDDEN'} icon={<VisibilityOffIcon />}
                            onClick={() => { setVisibleFavorite('none') }} />
                    }
                </Grid>

                <Grid item xs={12} style={{ display: visibleFavorite, marginTop: 30 }}>
                    <Grid container spacing={3}>
                        {resumeData.favorites.map((favorite, index) => (
                            <>
                                <Grid item xs={12} sm={6} md={3} lg={4}>
                                    <Grow in timeout={1000}>
                                        <Card className="custom_card" onClick={() => { setFavoriteDialog(favorite) }}>
                                            <CardActionArea>
                                                <CardMedia className="custom_card_image_favorite" image={favorite.imageUrl} title={favorite.title}>
                                                </CardMedia>
                                                <CardContent>
                                                    <Typography className="custom_card_title">{favorite.title}</Typography>
                                                    <Typography className="custom_card_caption" variant="body2">{favorite.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Grid>

                <Dialog open={favoriteDialog} onClose={() => { setFavoriteDialog(false) }} className="project_dialog" fullWidth>
                    <DialogTitle onClose={() => { setFavoriteDialog(false) }} className="project_dialog_title">{favoriteDialog.title}</DialogTitle>
                    {/* <img src={projectDialog.imageUrl} alt="image_project.jpg" className="project_dialog_image" /> */}
                    <YouTube videoId={favoriteDialog.videoId} className="project_dialog_youtobe" />
                    <DialogContent>
                        <Typography className="project_dialog_description">{favoriteDialog.description}</Typography>
                    </DialogContent>
                    <DialogActions className="project_dialog_actions">
                        {favoriteDialog?.links?.map((item, index) => (
                            <a href={item.link} key={index} className="project_dialog_icon" target="_blank">{item.icon}</a>
                        ))}
                    </DialogActions>
                </Dialog>
            </Grid>
        </>
    )
}

export default AboutMe
