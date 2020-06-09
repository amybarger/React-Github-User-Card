import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function GithubFollowersCard(props) {
  const classes = useStyles();
console.log("Followers card props", props)


  return (
    <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="User Github Info"
                height="300"
                  image={props.user.avatar_url}
                  title={props.user.login}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    User: {props.user.login}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <a href={props.user.url}>Click here for profile.</a>
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                Github
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button> */}
            </CardActions>
            </Card>
    </div>
  );
}