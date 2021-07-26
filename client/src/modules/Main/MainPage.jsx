import React, { } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardButton from './CardButton';

const useStyles = makeStyles({
    root: {
        maxWidth: 960,
        align: "center",
        margin: "auto"
    },
    media: {
        height: 540,
    },
});

export default function MainPage(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`/meme.jpg `}
                        title="Formula meme"
                    />
                    <CardContent>
                        This is a "super powerful" Wolfram application
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <CardButton setTab={props.setTab} name="Learn More" />
                </CardActions>
            </Card>

        </div>

    )
}

