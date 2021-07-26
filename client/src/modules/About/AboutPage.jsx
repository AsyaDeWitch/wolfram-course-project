import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        align: "center",
        margin: "auto"
    },
    media1: {
        height: 247,
    },
    media2: {
        height: 540,
    },
    media3: {
        height: 500,
    },
    media4: {
        height: 1100,
    },
});

export default function AboutPage() {

    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        Just some JS memes (or how much I'm in love with JS &#10084;)
                    </CardContent>
                    <CardMedia
                        className={classes.media1}
                        image={`/meme1.jpg `}
                        title="Programmer meme"
                    />
                    <CardContent>

                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    
                    <CardMedia
                        className={classes.media2}
                        image={`/js_meme.jpg `}
                        title="JS meme"
                    />
                    <CardContent>

                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                   
                    <CardMedia
                        className={classes.media3}
                        image={`/js_meme_2.jpg `}
                        title="Programmer meme"
                    />
                    <CardContent>

                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    
                    <CardMedia
                        className={classes.media4}
                        image={`/js_meme_3.jpg `}
                        title="Programmer meme"
                    />
                    <CardContent>

                    </CardContent>
                </CardActionArea>
            </Card>

        </div>

    )
}