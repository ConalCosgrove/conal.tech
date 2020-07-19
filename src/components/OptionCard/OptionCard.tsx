import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: '100%',
    margin: 20,
    '& a': {
      textDecoration: 'none',
      textDecorationColor: 'color'
    }
  },
  media: {
    height: 345
  },
});

export type CardObject  = {
  title: string,
  img: string,
  path: string,
  slug: string
}

type OptionCardProps = {
  data: CardObject
}

export default function OptionCard(props: OptionCardProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={props.data.path}>
      <CardActionArea disableRipple>
        <CardMedia
          className={classes.media}
          image={props.data.img}
          title={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.slug}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
