import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Projects() {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <div className="content">
      <h1 class="title">Projects</h1>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require('../assets/collo.png')}
            title="Collo App Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Collo
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Collo is a mobile application built with React Native front end and Ruby on Rails backend. Collo is an image and data organizer allowing users to take photos on their phones and write notes on the photos. Images are organized into collections where they can be easily searched.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
          <a href="https://github.com/jhuang429/Collo_frontend" target="_blank" style ={{ "text-decoration": "none"}}>
              GitHub
          </a>
        </Button>
          <Button size="small" color="primary">
          <a href="https://youtu.be/ARlC8JsT5sA" target="_blank" style ={{ "text-decoration": "none"}}>
              Demo
          </a>
        </Button>
        </CardActions>
      </Card>

    </div>
  )
}

export default Projects 