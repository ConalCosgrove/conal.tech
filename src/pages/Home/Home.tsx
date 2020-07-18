import React from 'react';
import CardGrid from '../../components/CardGrid';
import data from '../../data/testCardData';

export default function Home() {
  return (
    <CardGrid cards={data}></CardGrid>
  )
}