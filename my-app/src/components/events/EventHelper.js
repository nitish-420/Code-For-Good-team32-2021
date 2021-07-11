import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const EventHelper = ({ eventObj }) => {
    const classes = useStyles();
    let { user } = useAuth();

    let handleRegister = () => {
        axios.post('/event/register', { id: eventObj._id  , joined: eventObj.joined , email: user.email})
            .then()
            .catch();
    }

    let handle = () => {
        history.push('/EventsInfo');
    }

    return (
        <>
            <Grid className="fields" container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                // image="..\public\logo192.png"
                                title="title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {eventObj.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {eventObj.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant="contained" style={{ backgroundColor: "#86211B", color: "white" }} onClick={() => { handleRegister() }}>
                                {
                                    eventObj.joined ? "Cancel" : "Register"
                                }
                            </Button>
                            <Button size="small" variant="contained" style={{ backgroundColor: "#00000", color: "black" }} onClick={() => handle()}>
                                Learn more
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
