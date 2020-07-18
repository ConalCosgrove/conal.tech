import React from 'react';
import Grid from '@material-ui/core/Grid' ;
import OptionCard, { CardObject } from '../OptionCard';

interface GridProps {
  cards: CardObject[]
}

export default function CardGrid(props: GridProps) {
  return (
    <Grid
      container
      spacing={3}
      justify="center" >
        {
          props.cards.map((card) => {
            return <OptionCard data={card}></OptionCard>
          })
        }
        </Grid>
  )
}
