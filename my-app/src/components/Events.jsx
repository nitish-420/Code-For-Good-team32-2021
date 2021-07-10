
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


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

  
export const Events = () => {
  const classes = useStyles();
  /*
  1. get request 
  2. json format
  */
  return (
    <Grid className="fields" container spacing={3}>
      <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= "..\public\logo192.png"
          title="Event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Events are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#86211B", color: "white" }}>
        
  Register
</Button>
<Button size = "small" variant="contained" style = {{backgroundColor: "#00000", color: "black" }}>
  Learn more
</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../public/login192.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Events are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#86211B", color: "white" }}>
        
  Register
</Button>
<Button size = "small" variant="contained" style = {{backgroundColor: "#00000", color: "black" }}>
  Learn more
</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../public/login192.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Events are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#86211B", color: "white" }}>
        
        Register
      </Button>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#00000", color: "black" }}>
        Learn more
      </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../public/login192.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Events are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#86211B", color: "white" }}>
        
        Register
      </Button>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#00000", color: "black" }}>
        Learn more
      </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../public/login192.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Events are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#86211B", color: "white" }}>
        
        Register
      </Button>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#00000", color: "black" }}>
        Learn more
      </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../public/login192.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Events are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#86211B", color: "white" }}>
        
        Register
      </Button>
      <Button size = "small" variant="contained" style = {{backgroundColor: "#00000", color: "black" }}>
        Learn more
      </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    
    
    

    
  );
}
