import React from 'react';
import Grid from '@material-ui/core/Grid' ;
import OptionCard, { CardObject } from '../OptionCard';
import { makeStyles } from '@material-ui/core/styles';

interface GridProps {
  cards: CardObject[]
}

const useStyles = makeStyles({
  root: {
    width: 'stretch',
  }
});

export default function CardGrid(props: GridProps) {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justify="center" >
        {
          props.cards.map((card) => {
            return <OptionCard data={card}></OptionCard>
          })
        }
        </Grid>
  )
}
